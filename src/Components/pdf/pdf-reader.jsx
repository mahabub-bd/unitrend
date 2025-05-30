"use client";

import { useState } from "react";
import styled from "styled-components";
import { colors, device, fonts } from "../../Constants";
import {
  CustomButton,
  FlexCenter,
  Paragraph1,
  Paragraph2,
  SectionPadding,
} from "../../GlobalStyle";

const PDFCard = styled.div`
  background: ${colors.White};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 2rem 0;
`;

const PDFHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fafafa;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }
`;

const ControlsGroup = styled(FlexCenter)`
  gap: 1rem;

  @media ${device.tablet} {
    justify-content: center;
  }

  @media ${device.mobileL} {
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

const ZoomButton = styled(CustomButton)`
  padding: 0.5rem 1rem;
  font-size: 14px;
  min-width: 40px;

  @media ${device.mobileL} {
    padding: 0.4rem 0.8rem;
    font-size: 12px;
  }
`;

const DownloadButton = styled(CustomButton)`
  background-color: ${colors.Primary};

  @media ${device.mobileL} {
    padding: 0.4rem 0.8rem;
    font-size: 12px;
  }
`;

const ZoomDisplay = styled(Paragraph2)`
  font-weight: 600;
  min-width: 60px;
  text-align: center;
  margin: 0;
  color: ${colors.Black};
  font-size: 1.4rem;

  @media ${device.mobileL} {
    font-size: 1.2rem;
    min-width: 50px;
  }
`;

const PDFContent = styled.div`
  padding: 2rem;

  @media ${device.mobileL} {
    padding: 1rem;
  }
`;

const PDFDisplay = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  background: ${colors.White};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const PDFContainer = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  min-height: 600px;
  overflow: auto;
  position: relative;

  @media ${device.tablet} {
    height: calc(100vh - 400px);
    min-height: 500px;
  }

  @media ${device.mobileL} {
    height: calc(100vh - 350px);
    min-height: 400px;
  }
`;

const PDFIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;

const Note = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid ${colors.Primary};

  p {
    margin: 0;
    font-family: ${fonts.alt};
    font-size: 1.4rem;
    color: ${colors.Black};
    line-height: 1.5;

    @media ${device.mobileL} {
      font-size: 1.2rem;
    }
  }
`;

const PDFLink = styled.a`
  color: ${colors.Primary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const PDFTitle = styled(Paragraph1)`
  margin: 0;
  color: ${colors.Black};

  @media ${device.tablet} {
    text-align: center;
  }
`;

const PDFViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  const pdfUrl =
    "https://purepacbd.s3.ap-southeast-1.amazonaws.com/b9715a2c-1460-4141-93b9-4b0e6e3b8bae.pdf";

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(200, prev + 25));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(50, prev - 25));
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    link.click();
  };

  return (
    <SectionPadding>
      <PDFCard>
        <PDFHeader>
          <PDFTitle>PDF Document Viewer</PDFTitle>
          <ControlsGroup>
            <ZoomButton
              onClick={handleZoomOut}
              disabled={zoom <= 50}
              title="Zoom Out"
            >
              🔍-
            </ZoomButton>
            <ZoomDisplay>{zoom}%</ZoomDisplay>
            <ZoomButton
              onClick={handleZoomIn}
              disabled={zoom >= 200}
              title="Zoom In"
            >
              🔍+
            </ZoomButton>
            <DownloadButton onClick={handleDownload} title="Download PDF">
              📥 Download
            </DownloadButton>
          </ControlsGroup>
        </PDFHeader>

        <PDFContent>
          <PDFDisplay>
            <PDFContainer>
              <PDFIframe
                src={`${pdfUrl}#page=${currentPage}&zoom=${zoom}`}
                title="PDF Document"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "top left",
                  width: `${10000 / zoom}%`,
                  height: `${10000 / zoom}%`,
                }}
              />
            </PDFContainer>
          </PDFDisplay>

          <Note>
            <p>
              <strong>Note:</strong> If the PDF doesnt display properly, you can{" "}
              <PDFLink href={pdfUrl} target="_blank" rel="noopener noreferrer">
                open it in a new tab
              </PDFLink>{" "}
              or download it using the button above.
            </p>
          </Note>
        </PDFContent>
      </PDFCard>
    </SectionPadding>
  );
};

export default PDFViewer;
