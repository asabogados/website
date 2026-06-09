
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation.jsx';

function ContactForm() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic schema to pick up translations
  const formSchema = z.object({
    name: z.string().min(2, { message: t('contact.form.errors.name') }),
    email: z.string().email({ message: t('contact.form.errors.email') }),
    subject: z.string().min(1, { message: t('contact.form.errors.subject') }),
    message: z.string().min(10, { message: t('contact.form.errors.message') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const submissions = JSON.parse(localStorage.getItem('as_institutional_contact') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      });
      localStorage.setItem('as_institutional_contact', JSON.stringify(submissions));
      
      toast.success(t('contact.form.success'), {
        style: { borderRadius: '0', border: '1px solid hsl(var(--border))', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }
      });
      reset();
    } catch (error) {
      toast.error(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            {t('contact.form.name')}
          </Label>
          <Input
            id="name"
            {...register('name')}
            className="text-foreground border-b-border border-t-0 border-l-0 border-r-0 rounded-none shadow-none px-0 h-10 focus-visible:ring-0 focus-visible:border-b-primary bg-transparent"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            {t('contact.form.email')}
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className="text-foreground border-b-border border-t-0 border-l-0 border-r-0 rounded-none shadow-none px-0 h-10 focus-visible:ring-0 focus-visible:border-b-primary bg-transparent"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="subject" className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {t('contact.form.subject')}
        </Label>
        <Input
          id="subject"
          {...register('subject')}
          className="text-foreground border-b-border border-t-0 border-l-0 border-r-0 rounded-none shadow-none px-0 h-10 focus-visible:ring-0 focus-visible:border-b-primary bg-transparent"
        />
        {errors.subject && (
          <p className="text-xs text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <Label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {t('contact.form.message')}
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={4}
          className="text-foreground border-b-border border-t-0 border-l-0 border-r-0 rounded-none shadow-none px-0 resize-none focus-visible:ring-0 focus-visible:border-b-primary bg-transparent"
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-12 h-12 text-xs font-semibold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-none"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('contact.form.submitting')}
            </span>
          ) : (
            t('contact.form.submit')
          )}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
