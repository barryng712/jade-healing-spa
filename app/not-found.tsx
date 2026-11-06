import type { Metadata } from "next";
import Link from "next/link";
import { Wrap } from "@/components/wrap";

export const metadata: Metadata = {
  title: "Không tìm thấy trang",
};

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <Wrap>
        <h1 className="font-display text-[34px] leading-[42px] font-medium md:text-[48px] md:leading-[56px]">
          Không tìm thấy trang
        </h1>
        <p className="mt-3 max-w-[46ch]">Trang này không có trên website.</p>
        <p className="mt-6">
          <Link className="underline underline-offset-4" href="/">
            Về trang chủ
          </Link>
        </p>
      </Wrap>
    </section>
  );
}
