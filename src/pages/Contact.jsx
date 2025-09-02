
import React, { memo, useState, useCallback, useMemo, Suspense } from 'react';
import { useAdvancedPageData, useSelector, withErrorBoundary, withSuspense } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useAsyncComponent } from '@/hooks/useAsyncComponent';

const ContactForm = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  }, [formData]);

  return (
    <div className="contact-form-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
});

const ContactContent = memo(() => {
  const { data, loading, error } = useAdvancedPageData('contact');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) return <div className="page-loading">Loading contact page...</div>;
    if (error) return <div className="page-error">Error loading page: {error}</div>;

    return (
      <UniversalPage 
        pageKey="contact"
        showHero={true}
        showFeatures={false}
        showCTA={false}
        className={animationsEnabled ? 'animations-enabled' : ''}
      >
        <Suspense fallback={<div className="loading-form">Loading contact form...</div>}>
          <ContactForm />
        </Suspense>
      </UniversalPage>
    );
  }, [data, loading, error, animationsEnabled]);

  return measurePerformance('Contact page render', () => memoizedContent);
});

ContactForm.displayName = 'ContactForm';
ContactContent.displayName = 'ContactContent';

const Contact = withErrorBoundary(
  withSuspense(ContactContent, <div>Loading Contact page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <div className="container text-center py-5">
        <h2>Failed to load Contact page</h2>
        <p>{error?.message}</p>
        <button className="btn btn-primary" onClick={resetError}>Try Again</button>
      </div>
    </div>
  )
);

export default Contact;
