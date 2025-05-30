import { default as PdfViewer } from "../Components/pdf/pdf-reader";
import { Wrapper } from "../GlobalStyle";

export default function CompanyProfilePage() {
  return (
    <div>
      <Wrapper>
        <PdfViewer />
      </Wrapper>
    </div>
  );
}
