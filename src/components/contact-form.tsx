
"use client";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

import { contactSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: Replace these with your actual EmailJS credentials
  // You can find these in your EmailJS account dashboard.
  // It's recommended to use environment variables for security.
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = () => {
    if (!formRef.current) return;
    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey || emailJsServiceId === 'YOUR_SERVICE_ID') {
        toast({
            title: 'Configuration Error',
            description: "EmailJS is not configured. Please add your credentials.",
            variant: 'destructive',
        });
        return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(emailJsServiceId, emailJsTemplateId, formRef.current, {
        publicKey: emailJsPublicKey,
      })
      .then(
        () => {
          toast({
            title: 'Message Sent!',
            description: "Thank you for your message! We'll get back to you soon.",
          });
          form.reset();
          if(formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast({
            title: 'Error',
            description: `Failed to send message: ${error.text}`,
            variant: 'destructive',
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Send us a message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              {...form.register('name')}
              name="name" // EmailJS needs the name attribute
              className="mt-1"
              aria-invalid={form.formState.errors.name ? "true" : "false"}
            />
            {form.formState.errors.name && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              name="email" // EmailJS needs the name attribute
              className="mt-1"
              aria-invalid={form.formState.errors.email ? "true" : "false"}
            />
            {form.formState.errors.email && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...form.register('message')}
              name="message" // EmailJS needs the name attribute
              rows={5}
              className="mt-1"
              aria-invalid={form.formState.errors.message ? "true" : "false"}
            />
            {form.formState.errors.message && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
