import type { Metadata } from "next";
import { Wrap } from "@/components/wrap";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Đánh giá",
  description:
    "Chưa có đánh giá được phép đăng cho Jade Healing Spa. Xem vị trí trên Google Maps.",
};

export default function ReviewsPage() {
  return (
    <section className="py-12 md:py-20">
      <Wrap>
        <h1 className="font-display text-[34px] leading-[42px] font-medium md:text-[48px] md:leading-[56px]">
          Đánh giá
        </h1>
        <p className="mt-6 max-w-[62ch] rounded border border-dashed border-sage p-7">
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
