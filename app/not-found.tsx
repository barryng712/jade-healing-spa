import type { Metadata } from "next";
import Link from "next/link";
import { MarkTitle } from "@/components/mark-title";
import { Wrap } from "@/components/wrap";

export const metadata: Metadata = {
  title: "Không tìm thấy trang",
};

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <Wrap>
        <MarkTitle as="h1">Không tìm thấy trang</MarkTitle>
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
