import type { Metadata } from "next";
import { MarkTitle } from "@/components/mark-title";
import { Wrap } from "@/components/wrap";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Đánh giá",
  description:
    "Chưa có đánh giá được phép đăng cho Jade Healing Spa. Xem vị trí trên Google Maps.",
};

export default function ReviewsPage() {
  return (
    <section className="py-12 md:py-7">
      <Wrap>
        <MarkTitle as="h1">Đánh giá</MarkTitle>
        <p className="mt-6 max-w-[62ch]">
          Chưa có đánh giá được phép đăng.
          <br />
          <a
            className="mt-3 inline-block underline underline-offset-4"
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Xem vị trí trên Google Maps
          </a>
        </p>
      </Wrap>
    </section>
  );
}
