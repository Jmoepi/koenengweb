
"use client";

import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

import { contactSchema } from '@/lib/schemas';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

type ContactFormData = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useActionState<ContactFormState | null, FormData>(submitContactForm, null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      form.reset();
      formRef.current?.reset(); // Ensure native form also resets if needed
    } else if (state?.message && !state.success) {
       // Field errors are handled by react-hook-form
       // This handles general form errors
      if(state.errors?._form) {
        toast({
          title: 'Error',
          description: state.errors._form.join(', '),
          variant: 'destructive',
        });
      } else if (state.message && !state.errors) { // General message without field errors
         toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast, form]);
  
  useEffect(() => {
    if (state?.errors) {
      const errors = state.errors;
      if (errors.name) form.setError('name', { type: 'server', message: errors.name.join(', ') });
      if (errors.email) form.setError('email', { type: 'server', message: errors.email.join(', ') });
      if (errors.message) form.setError('message', { type: 'server', message: errors.message.join(', ') });
    }
  }, [state, form]);


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Send us a message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} onSubmit={form.handleSubmit(() => formRef.current?.requestSubmit())} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              {...form.register('name')}
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
              rows={5}
              className="mt-1"
              aria-invalid={form.formState.errors.message ? "true" : "false"}
            />
            {form.formState.errors.message && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
          
          {state?.errors?._form && (
            <p className="text-sm font-medium text-destructive">
              {state.errors._form.join(', ')}
            </p>
          )}

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
