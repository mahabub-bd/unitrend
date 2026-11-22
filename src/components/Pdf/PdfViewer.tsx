"use client";

import { useState } from "react";
import {
  FiDownload,
  FiExternalLink,
  FiMinus,
  FiPlus,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const pdfUrl =
  "https://purepacbd.s3.ap-southeast-1.amazonaws.com/b9715a2c-1460-4141-93b9-4b0e6e3b8bae.pdf";

const PdfViewer = () => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom((prev) => Math.min(200, prev + 25));
  const handleZoomOut = () => setZoom((prev) => Math.max(50, prev - 25));

  return (
    <>
      <section className="border-b border-line bg-porcelain">
        <Container className="py-16 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Company profile"
              title="Explore Unitrend International."
              description="View our company, product range, principal partners and service capabilities."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              <div className="flex flex-col gap-4 border-b border-line bg-porcelain/50 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="font-base text-sm font-semibold text-ink">
                    Unitrend Company Profile
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
                    PDF document
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center rounded-full border border-line bg-white p-1">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      disabled={zoom <= 50}
                      aria-label="Zoom out"
                      className="grid h-9 w-9 place-items-center rounded-full text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FiMinus aria-hidden="true" />
                    </button>
                    <span className="min-w-[58px] text-center text-xs font-semibold text-ink">
                      {zoom}%
                    </span>
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      disabled={zoom >= 200}
                      aria-label="Zoom in"
                      className="grid h-9 w-9 place-items-center rounded-full text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <FiPlus aria-hidden="true" />
                    </button>
                  </div>

                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-primary/20 px-4 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    <FiExternalLink aria-hidden="true" />
                    Open
                  </a>
                  <a
                    href={pdfUrl}
                    download
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-xs font-semibold text-white transition-colors hover:bg-secondary"
                  >
                    <FiDownload aria-hidden="true" />
                    Download
                  </a>
                </div>
              </div>

              <div className="bg-sand p-3 sm:p-5">
                <div className="h-[65vh] min-h-[480px] overflow-auto rounded-xl border border-line bg-white sm:h-[78vh] sm:min-h-[600px]">
                  <iframe
                    src={`${pdfUrl}#zoom=${zoom}`}
                    title="Unitrend International company profile"
                    className="h-full w-full border-0"
                  />
                </div>
              </div>

              <div className="border-t border-line px-5 py-4 text-xs leading-6 text-muted sm:px-6">
                If the PDF does not display correctly, use{" "}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Open PDF
                </a>{" "}
                to view it in a new tab.
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
};

export default PdfViewer;
