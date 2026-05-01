"use client";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { contactSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

type ContactFormData = z.infer<typeof contactSchema>;

const fieldClassName =
  'mt-2 min-h-12 rounded-2xl border-primary/12 bg-white/92 px-4 text-base shadow-none placeholder:text-muted-foreground/70 focus-visible:ring-primary/30';

const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: 'Configuration error',
        description: 'EmailJS credentials are missing from the public environment variables.',
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
            title: 'Message sent',
            description: "Thank you for reaching out. We'll review your message and respond soon.",
          });
          form.reset();
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast({
            title: 'Sending failed',
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
    <Card className="rounded-[30px] border-white/70 bg-white/86 shadow-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
        <CardDescription className="max-w-xl text-sm leading-7 text-muted-foreground">
          Share what you are building, what is not working in the current experience, and what outcome you need.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Full name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              {...form.register('name')}
              name="name"
              className={fieldClassName}
              aria-invalid={form.formState.errors.name ? 'true' : 'false'}
            />
            {form.formState.errors.name ? (
              <p className="mt-2 text-sm text-destructive">{form.formState.errors.name.message}</p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...form.register('email')}
              name="email"
              className={fieldClassName}
              aria-invalid={form.formState.errors.email ? 'true' : 'false'}
            />
            {form.formState.errors.email ? (
              <p className="mt-2 text-sm text-destructive">{form.formState.errors.email.message}</p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your website, project, or idea."
              {...form.register('message')}
              name="message"
              rows={6}
              className={`${fieldClassName} min-h-[9rem] py-3`}
              aria-invalid={form.formState.errors.message ? 'true' : 'false'}
            />
            {form.formState.errors.message ? (
              <p className="mt-2 text-sm text-destructive">{form.formState.errors.message.message}</p>
            ) : null}
          </div>

          <Button type="submit" disabled={isSubmitting} className="h-12 w-full rounded-full shadow-[0_16px_32px_rgba(34,87,42,0.2)]">
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
