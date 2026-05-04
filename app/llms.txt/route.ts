export const dynamic = "force-static";

export function GET() {
  const content = `# Aleyna Aytürk Korkmaz — CRM Danışmanı & Dijital Çözüm Uzmanı
> Uzaktan, global dijital danışmanlık hizmetleri.

## Hakkında
Aleyna Aytürk Korkmaz; HubSpot, Salesforce ve Zoho CRM kurulum & yönetimi,
web sitesi geliştirme, Zapier/Make otomasyon entegrasyonu konularında
uzaktan hizmet sunan bir dijital danışmandır.

## Hizmetler
- CRM Kurulum & Yönetim (HubSpot, Salesforce, Zoho CRM)
- Web Sitesi Tasarım & Geliştirme
- Otomasyon & Entegrasyon (Zapier, Make)
- Dijital Danışmanlık & Strateji

## İletişim
- E-posta: ayturkkorkmazz@gmail.com
- Web: https://ayturkkorkmaz.com.tr

## Sitemap
- https://ayturkkorkmaz.com.tr/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
