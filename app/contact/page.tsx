import type { Metadata } from "next";
import { ContactActions } from "@/components/contact-actions";
import { Wrap } from "@/components/wrap";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `${site.address}. ${site.hours}. Điện thoại ${site.phoneDisplay}. ${site.email}.`,
};

export default function ContactPage() {
  return (
    <section className="py-12 md:py-20">
      <Wrap>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-[32px] font-[460] md:text-[40px]">Liên hệ</h1>
            <dl className="mt-2">
              <dt className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">Địa chỉ</dt>
              <dd className="mt-0.5">{site.address}</dd>
              <dt className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">Giờ</dt>
              <dd className="mt-0.5">{site.hours}</dd>
              <dt className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">Điện thoại</dt>
              <dd className="mt-0.5">
                <a className="underline underline-offset-4" href={site.phoneTel}>
                  {site.phoneDisplay}
                </a>
              </dd>
              <dt className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">Email</dt>
              <dd className="mt-0.5">
                <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
              <dt className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">Facebook</dt>
              <dd className="mt-0.5">
                <a
                  className="underline underline-offset-4"
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/jadehealingspa
                </a>
              </dd>
              <dt className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">Đỗ xe</dt>
              <dd className="mt-0.5">{site.parking}</dd>
              <dt className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">Zalo</dt>
              <dd className="mt-0.5">Liên kết Zalo sẽ được bổ sung.</dd>
            </dl>
            <div className="mt-6">
              <ContactActions />
            </div>
          </div>
          <div>
            <iframe
              title="Bản đồ vị trí Jade Healing Spa"
              src={site.mapEmbedUrl}
              className="h-[280px] w-full border-0 bg-[#e7e0d4]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="mt-3 text-sm text-muted">
              <a
                className="underline underline-offset-4"
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mở Google Maps
              </a>
              {" · "}
              21.03320, 105.78426
            </p>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
