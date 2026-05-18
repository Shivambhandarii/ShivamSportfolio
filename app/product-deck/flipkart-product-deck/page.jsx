import ProductDeckViewer from "@/components/ProductDeckViewer";

export default function FlipkartProductDeckPage() {
  return (
    <ProductDeckViewer
      label="Flipkart Product Deck"
      title="Flipkart Pandemic Problem-Solving Deck"
      description="A product strategy and problem-solving deck focused on identifying challenges observed during the COVID-19 pandemic and proposing scalable technology-driven solutions with measurable business impact."
      basePath="/Product Deck"
      pageCount={7}
    />
  );
}
