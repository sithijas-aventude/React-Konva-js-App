import { Button, Typography } from 'components';

export const ReportBuilderHeader = () => {
  const handleBack = () => {
    console.log('Back');
  };

  return (
    <div className="report-builder-header-container">
      <div className="report-title">
        <div className="back-control-content">
          <Button
            label=""
            icon="ri-arrow-left-line"
            style={{ height: '30px', width: '30px', fontSize: '20px' }}
            onClick={handleBack}
          />
          <Typography variant="h5" color="gray-900" style={{ fontWeight: 500 }}>
            Untitled report
          </Typography>
        </div>
      </div>
      <div className="report-builder-actions">Forhåndsvis</div>;
    </div>
  );
};
