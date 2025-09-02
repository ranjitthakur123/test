
import React, { memo, useState, useCallback, useMemo, Suspense } from 'react';
import { useAdvancedPageData, useSelector, withErrorBoundary, withSuspense } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

const DemoForm = memo(() => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const { debounce } = usePerformanceOptimization();

  const debouncedFormUpdate = useMemo(
    () => debounce((field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    }, 300),
    [debounce]
  );

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    debouncedFormUpdate(name, value);
  }, [debouncedFormUpdate]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Demo booked successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to book demo. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [formData]);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="demo-form-wrapper p-5">
              <h3 className="f-28 f-600 black mb-4 text-center">Schedule Your Demo</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input 
                      type="text" 
                      name="firstName"
                      className="form-control" 
                      placeholder="First Name" 
                      onChange={handleInputChange}
                      required 
                      disabled={submitting}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input 
                      type="text" 
                      name="lastName"
                      className="form-control" 
                      placeholder="Last Name" 
                      onChange={handleInputChange}
                      required 
                      disabled={submitting}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input 
                      type="email" 
                      name="email"
                      className="form-control" 
                      placeholder="Business Email" 
                      onChange={handleInputChange}
                      required 
                      disabled={submitting}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input 
                      type="text" 
                      name="company"
                      className="form-control" 
                      placeholder="Company Name" 
                      onChange={handleInputChange}
                      required 
                      disabled={submitting}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control" 
                    placeholder="Phone Number" 
                    onChange={handleInputChange}
                    disabled={submitting}
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    name="message"
                    className="form-control" 
                    rows="4" 
                    placeholder="Tell us about your requirements..."
                    onChange={handleInputChange}
                    disabled={submitting}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="devnagri-btn"
                    disabled={submitting}
                  >
                    {submitting ? 'Booking Demo...' : 'Book Demo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const BenefitsSection = memo(({ benefits }) => (
  <section className="py-5 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h3 className="f-28 f-600 black">What You'll Get</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <ul className="benefits-list">
            {benefits?.map((benefit, index) => (
              <li key={`benefit-${index}`} className="benefit-item mb-3">
                <i className="fas fa-check-circle text-success me-3"></i>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
));

const BookDemoContent = memo(() => {
  const { data: pageData, loading, error } = useAdvancedPageData('bookDemo');
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  const memoizedContent = useMemo(() => {
    if (loading) return <div className="page-loading">Loading demo booking page...</div>;
    if (error) return <div className="page-error">Error loading page: {error}</div>;

    return (
      <UniversalPage 
        pageKey="bookDemo"
        showHero={true}
        showFeatures={false}
        showCTA={false}
        className={animationsEnabled ? 'animations-enabled' : ''}
      >
        <Suspense fallback={<div className="loading-form">Loading form...</div>}>
          <DemoForm />
        </Suspense>
        <Suspense fallback={<div className="loading-benefits">Loading benefits...</div>}>
          <BenefitsSection benefits={pageData.benefits} />
        </Suspense>
      </UniversalPage>
    );
  }, [pageData, loading, error, animationsEnabled]);

  return memoizedContent;
});

DemoForm.displayName = 'DemoForm';
BenefitsSection.displayName = 'BenefitsSection';
BookDemoContent.displayName = 'BookDemoContent';

const BookDemo = withErrorBoundary(
  withSuspense(BookDemoContent, <div>Loading Book Demo page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <div className="container text-center py-5">
        <h2>Failed to load Demo Booking page</h2>
        <p>{error?.message}</p>
        <button className="btn btn-primary" onClick={resetError}>Try Again</button>
      </div>
    </div>
  )
);

export default BookDemo;
