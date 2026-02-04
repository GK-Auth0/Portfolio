import { useState, ChangeEvent, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using EmailJS service
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: import.meta.env.VITE_RECIPIENT_EMAIL
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/50" 
            placeholder="Your Name" 
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
          <input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/50" 
            placeholder="your@email.com" 
            type="email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">How can I help you?</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/50" 
          placeholder="Tell me about your opportunity or project..." 
          rows={4}
          required
        />
      </div>
      
      {submitStatus === 'success' && (
        <div className="text-green-600 text-sm font-medium">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="text-red-600 text-sm font-medium">
          Failed to send message. Please try again or email me directly.
        </div>
      )}
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
};

export default ContactForm;