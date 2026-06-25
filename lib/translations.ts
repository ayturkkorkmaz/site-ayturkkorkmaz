export type Lang = "tr" | "en";

export const t = {
  tr: {
    nav: {
      services: "Hizmetler",
      howIWork: "Süreç",
      about: "Hakkımda",
      contact: "İletişim",
      cta: "Ücretsiz Görüşme",
    },
    hero: {
      name: "Aleyna Aytürk Korkmaz",
      title: "İşletmenizi Dijitalde Görünür Yapıyorum",
      tagline: "SEO & GEO, CRM sistemleri, dijital klon ve web çözümleri — Antalya'da, yüz yüze.",
      cta1: "15dk Ücretsiz Görüşme",
      cta2: "Hizmetleri Gör",
      badge: "SEO · GEO · CRM · Dijital Klon · AI Asistan · Web",
    },
    services: {
      heading: "Hizmetler",
      sub: "Antalya'da işletmeniz için dijital çözümler",
      items: [
        {
          icon: "seoGeo",
          title: "SEO & GEO Hizmetleri",
          desc: "Google'da üst sıralara çıkın, ChatGPT ve Gemini'de görünür olun. Teknik SEO, yerel SEO ve yapay zeka görünürlüğü optimizasyonu.",
          for: "Google ve AI aramada görünmek isteyenler için",
        },
        {
          icon: "crm",
          title: "CRM Sistemleri",
          desc: "HubSpot, Salesforce, Zoho kurulum, özelleştirme ve optimizasyonu. Müşteri ilişkilerinizi profesyonelce yönetin.",
          for: "Müşteri yönetimini dijitalleştirmek isteyenler için",
        },
        {
          icon: "digitalClone",
          title: "Dijital Klon",
          desc: "Markanızın sesini, tarzını ve değerlerini yansıtan yapay zeka destekli dijital kopya. Müşterilerinizle sizin gibi iletişim kurar.",
          for: "Marka kimliğini dijitale taşımak isteyenler için",
        },
        {
          icon: "assistant",
          title: "Kişisel Asistan",
          desc: "Takvim yönetimi, e-posta takibi, görev organizasyonu ve hatırlatmalar. Günlük iş yükünüzü hafifleten AI destekli asistan.",
          for: "Zamandan tasarruf etmek isteyen profesyoneller için",
        },
        {
          icon: "web",
          title: "Web Sitesi Geliştirme",
          desc: "Hızlı, modern ve SEO/GEO uyumlu kurumsal web siteleri. Mobil öncelikli tasarım, yapay zeka tarafından okunabilir altyapı.",
          for: "Profesyonel dijital varlık kurmak isteyenler için",
        },
        {
          icon: "visibility",
          title: "Dijital Görünürlük",
          desc: "Google Business Profile, sosyal medya varlığı, online itibar yönetimi ve dizin kayıtları. İşletmenizi dijitalde her yerde bulunur yapın.",
          for: "Çevrimiçi bilinirliğini artırmak isteyenler için",
        },
      ],
    },
    process: {
      heading: "Nasıl Çalışıyorum",
      sub: "Şeffaf, öngörülebilir, sonuç odaklı",
      steps: [
        {
          num: "01",
          title: "Keşif",
          desc: "İhtiyaçlarını, hedeflerini ve mevcut sistemleri derinlemesine anlıyorum. İlk görüşme ücretsizdir.",
          tag: "İlk görüşme ücretsiz",
          duration: "1–2 iş günü",
          bullets: [
            "Mevcut sistem & süreç analizi",
            "Hedef ve kapsam netleştirme",
            "Bütçe & zaman çerçevesi belirleme",
            "Teknik ön değerlendirme",
          ],
          deliverables: [
            "İhtiyaç analiz raporu",
            "Kapsam & bütçe taslağı",
            "Öncelik listesi",
          ],
        },
        {
          num: "02",
          title: "Çözüm",
          desc: "Sana özel bir plan ve çözüm mimarisi hazırlıyorum. Teknoloji seçiminden roadmap'e kadar her adım netleşir.",
          tag: "Kapsamlı roadmap",
          duration: "3–5 iş günü",
          bullets: [
            "Özel çözüm mimarisi tasarımı",
            "Teknoloji seçimi & kıyaslama",
            "Aşamalı uygulama planı",
            "Maliyet & ROI tahmini",
          ],
          deliverables: [
            "Çözüm mimarisi dokümanı",
            "Teknoloji karşılaştırma tablosu",
            "Roadmap & zaman planı",
          ],
        },
        {
          num: "03",
          title: "Uygulama",
          desc: "Kurulum, entegrasyon ve sonuçların takibini birlikte yürütüyoruz. Proje sonrası destek dahildir.",
          tag: "Proje sonrası destek dahil",
          duration: "Projeye göre değişir",
          bullets: [
            "Kurulum & entegrasyon",
            "Test & kalite kontrolü",
            "Ekip eğitimi & onboarding",
            "Sonuç takibi & optimizasyon",
          ],
          deliverables: [
            "Teslim edilen sistem",
            "Eğitim materyalleri",
            "Destek planı & dokümantasyon",
          ],
        },
        {
          num: "04",
          title: "Teslim & Eğitim",
          desc: "Sistemi ekibinize teslim ediyor, canlı eğitim ve dokümantasyonla adaptasyonu hızlandırıyorum. Sorunsuz bir geçiş için her adımda yanınızdayım.",
          tag: "Canlı eğitim dahil",
          duration: "1–3 iş günü",
          bullets: [
            "Canlı sistem teslimi & devreye alma",
            "Ekip başı birebir eğitim",
            "Kullanıcı kılavuzu hazırlama",
            "Kabul testleri & onay süreci",
          ],
          deliverables: [
            "Teslim tutanağı",
            "Kullanıcı kılavuzu",
            "Eğitim kayıt videoları",
          ],
        },
        {
          num: "05",
          title: "Destek & İyileştirme",
          desc: "Proje sonrasında da yanınızdayım. Sistem büyüdükçe iyileştiriyor, yeni süreçleri entegre ediyor ve performansı düzenli raporluyorum.",
          tag: "Süregelen destek",
          duration: "Aylık plan",
          bullets: [
            "Öncelikli destek & hızlı yanıt",
            "Aylık performans raporlama",
            "Süreç & otomasyon optimizasyonu",
            "Yeni özellik entegrasyonu",
          ],
          deliverables: [
            "Aylık durum raporu",
            "Optimizasyon önerileri",
            "Genişletilmiş yol haritası",
          ],
        },
      ],
    },
    about: {
      heading: "Hakkımda",
      p1: "Antalya merkezli dijital çözüm uzmanıyım. SEO & GEO ile işletmeleri arama motorlarında ve yapay zeka platformlarında görünür yapıyor, CRM sistemleri kuruyor, dijital klon çözümleri geliştiriyor ve modern web siteleri oluşturuyorum.",
      p2: "Müşterilerimle yüz yüze çalışıyorum — uzaktan değil, Antalya'da birebir. Her projede teknik mükemmelliği, iş hedeflerinizle uyumlu pratik çözümlerle birleştiriyorum.",
      tools: "Çalıştığım araçlar",
    },
    contact: {
      heading: "Projenizi Konuşalım",
      sub: "Fikrinizi paylaşın, en kısa sürede dönelim.",
      name: "Adınız",
      email: "E-posta",
      message: "Mesajınız",
      send: "Gönder",
      sending: "Gönderiliyor...",
      success: "Mesajınız iletildi. En geç 24 saat içinde dönüş yapacağım.",
      error: "Bir hata oluştu. Lütfen tekrar deneyin.",
      reply: "Genellikle 24 saat içinde yanıtlarım.",
      or: "ya da doğrudan yazın",
    },
    geo: {
      badge: "Yapay Zeka Görünürlüğü",
      heading: "GEO — Generative Engine Optimization",
      intro:
        "GEO (Generative Engine Optimization), markanızın ChatGPT, Gemini, Perplexity ve Google AI Overviews gibi yapay zeka cevaplarında görünür ve alıntılanır olmasını sağlama disiplinidir. Aleyna Aytürk Korkmaz, Antalya'daki işletmeler için GEO hizmeti sunar.",
      whatIsGeo: {
        heading: "GEO nedir, SEO'dan farkı ne?",
        p1: "SEO (Search Engine Optimization), web sitenizin Google arama sonuçlarında üst sıralarda yer almasını hedefler. GEO ise bir adım ötesine geçer: ChatGPT, Gemini, Perplexity ve Google AI Overviews gibi yapay zeka motorlarının ürettiği cevaplarda markanızın anılmasını ve kaynak olarak gösterilmesini optimize eder.",
        p2: "GEO ve SEO birbirinin alternatifi değil, tamamlayıcısıdır. Güçlü bir SEO altyapısı, GEO başarısını destekler. GEO ise klasik arama trafiğinin ötesinde, yapay zeka destekli aramalarda da görünürlük sağlar.",
      },
      whatWeDo: {
        heading: "Ne yapıyoruz?",
        items: [
          {
            title: "Schema Markup Optimizasyonu",
            desc: "İşletmenizin yapılandırılmış verilerini (JSON-LD) yapay zeka motorlarının doğru şekilde okuyup alıntılayabileceği formata getiriyoruz.",
          },
          {
            title: "Cevap-Biçimli İçerik Üretimi",
            desc: "Yapay zeka motorlarının doğrudan alıntılayabileceği, soru-cevap formatında, net ve otoriter içerikler oluşturuyoruz.",
          },
          {
            title: "Üçüncü Taraf Citation Oluşturma",
            desc: "Markanızın sektörel dizinler, referans siteleri ve güvenilir kaynaklarda anılmasını sağlayarak AI motorlarının güven skorunu artırıyoruz.",
          },
          {
            title: "AI Görünürlük İzleme",
            desc: "Marka adınızın ChatGPT, Gemini ve Perplexity cevaplarında ne sıklıkla ve nasıl anıldığını düzenli olarak takip edip raporluyoruz.",
          },
        ],
      },
      whoFor: {
        heading: "Kimler için?",
        desc: "Antalya başta olmak üzere Türkiye genelindeki yerel işletmeler, KOBİ'ler ve dijital görünürlüğünü yapay zeka çağına taşımak isteyen markalar için çalışıyoruz. Sektör fark etmez — restorandan kliniğe, e-ticaretten hizmet sektörüne kadar her işletme GEO'dan fayda görebilir.",
      },
      process: {
        heading: "Süreç",
        steps: [
          {
            num: "01",
            title: "Denetim (Audit)",
            desc: "Mevcut web sitenizi, yapılandırılmış verilerinizi ve yapay zeka motorlarındaki görünürlüğünüzü analiz ediyoruz. Rakiplerinizin AI cevaplarındaki konumunu da değerlendiriyoruz.",
          },
          {
            num: "02",
            title: "Uygulama",
            desc: "Schema markup düzenlemeleri, cevap-biçimli içerik üretimi ve üçüncü taraf citation stratejisini hayata geçiriyoruz.",
          },
          {
            num: "03",
            title: "İzleme ve Raporlama",
            desc: "Markanızın ChatGPT, Gemini ve Perplexity'deki görünürlüğünü düzenli olarak izliyor, ilerlemeyi raporluyor ve stratejiyi güncel tutuyoruz.",
          },
        ],
      },
      faq: {
        heading: "Sık Sorulan Sorular",
        items: [
          {
            q: "GEO nedir?",
            a: "GEO (Generative Engine Optimization), markanızın ChatGPT, Gemini, Perplexity gibi yapay zeka motorlarının cevaplarında görünür ve alıntılanır olmasını sağlayan optimizasyon disiplinidir.",
          },
          {
            q: "İşletmemi ChatGPT'de nasıl görünür yaparım?",
            a: "Schema markup, cevap-biçimli içerik, üçüncü taraf kaynaklarda atıf oluşturma ve yapılandırılmış veri optimizasyonu ile işletmeniz yapay zeka cevaplarında alıntılanabilir hale gelir.",
          },
          {
            q: "GEO ile SEO arasındaki fark nedir?",
            a: "SEO, Google arama sonuçlarında sıralama hedefler. GEO ise yapay zeka motorlarının (ChatGPT, Gemini, Perplexity) ürettiği cevaplarda markanızın anılmasını ve alıntılanmasını optimize eder. İkisi birlikte çalışır.",
          },
          {
            q: "Antalya'da GEO hizmeti veriyor musunuz?",
            a: "Evet. Aleyna Aytürk Korkmaz olarak Antalya ve tüm Türkiye'deki işletmelere uzaktan GEO danışmanlık hizmeti sunuyorum.",
          },
        ],
      },
      cta: {
        heading: "Yapay Zekada Görünür Olun",
        desc: "Markanızın ChatGPT, Gemini ve Perplexity cevaplarında yer almasını istiyorsanız, GEO stratejinizi birlikte oluşturalım.",
        button: "İletişime Geç",
      },
    },
    seo: {
      badge: "Arama Motoru Optimizasyonu",
      heading: "SEO Hizmeti — Antalya",
      intro:
        "Aleyna Aytürk Korkmaz, Antalya'daki yerel işletmelerin Google'da üst sıralara çıkmasını sağlayan SEO hizmeti sunar.",
      whatIsSeo: {
        heading: "SEO nedir, ne işe yarar?",
        desc: "SEO (Search Engine Optimization), web sitenizin Google ve diğer arama motorlarında aranılan kelimeler için üst sıralarda çıkmasını sağlayan tekniklerin bütünüdür. Doğru uygulandığında sitenize reklam harcamadan organik trafik çeker, güvenilirliğinizi artırır ve potansiyel müşterilerinizin sizi bulmasını kolaylaştırır.",
      },
      whatWeDo: {
        heading: "Ne yapıyoruz?",
        items: [
          {
            title: "Teknik SEO",
            desc: "Site hızı optimizasyonu, mobil uyumluluk, schema markup yapılandırması, taranabilirlik ve indeksleme düzenlemeleri.",
          },
          {
            title: "On-Page Optimizasyon",
            desc: "Sayfa başlıkları, meta açıklamaları, içerik yapısı, anahtar kelime stratejisi ve dahili bağlantı mimarisi iyileştirmesi.",
          },
          {
            title: "Yerel SEO",
            desc: "Google Business Profile kurulumu ve optimizasyonu, harita görünürlüğü, yerel dizin kayıtları ve müşteri yorum yönetimi.",
          },
          {
            title: "Link & Otorite Geliştirme",
            desc: "Güvenilir kaynaklardan doğal backlink kazanımı, sektörel dizin kayıtları ve dijital otorite artırma stratejileri.",
          },
        ],
      },
      whoFor: {
        heading: "Kimler için?",
        desc: "Antalya'daki gözlükçüler, diş klinikleri, avukatlar, restoranlar ve diğer KOBİ'ler başta olmak üzere, yerel müşteriye ulaşmak isteyen her işletme için. Google'da \"yakınımdaki\" aramalarında görünmek, haritada üst sırada yer almak ve rakiplerinizin önüne geçmek istiyorsanız SEO tam size göre.",
      },
      process: {
        heading: "Süreç",
        steps: [
          {
            num: "01",
            title: "Site Denetimi",
            desc: "Mevcut sitenizin teknik altyapısını, içerik yapısını, anahtar kelime pozisyonlarını ve rakip durumunu kapsamlı şekilde analiz ediyoruz.",
          },
          {
            num: "02",
            title: "İyileştirme",
            desc: "Teknik düzeltmeler, içerik optimizasyonu, yerel SEO kurulumu ve link stratejisini uyguluyoruz.",
          },
          {
            num: "03",
            title: "İzleme ve Raporlama",
            desc: "Sıralama değişikliklerini, organik trafiği ve dönüşüm verilerini düzenli olarak izliyor ve raporluyoruz.",
          },
        ],
      },
      faq: {
        heading: "Sık Sorulan Sorular",
        items: [
          {
            q: "Antalya'da SEO ajansı önerir misin?",
            a: "Aleyna Aytürk Korkmaz olarak Antalya'daki yerel işletmelere özel SEO danışmanlığı sunuyorum. Büyük ajans maliyetleri olmadan, işletmenize odaklı ve şeffaf bir SEO süreci yürütüyorum.",
          },
          {
            q: "Google'da üst sıralara nasıl çıkarım?",
            a: "Teknik SEO (site hızı, mobil uyumluluk, schema markup), kaliteli içerik optimizasyonu, yerel SEO (Google Business Profile, harita görünürlüğü) ve güvenilir backlink stratejisi ile Google'da üst sıralara çıkabilirsiniz.",
          },
          {
            q: "Yerel işletmem için SEO ne kadar sürede sonuç verir?",
            a: "Yerel SEO genellikle ilk iyileştirmeleri 1-3 ay içinde göstermeye başlar. Kalıcı ve güçlü sıralamalar için 3-6 aylık sürekli çalışma önerilir. Sonuç, sektöre ve rekabet durumuna göre değişir.",
          },
          {
            q: "SEO ile GEO arasındaki fark nedir?",
            a: "SEO, Google arama sonuçlarında üst sıralarda yer almayı hedefler. GEO ise ChatGPT, Gemini, Perplexity gibi yapay zeka motorlarının cevaplarında markanızın anılmasını optimize eder. İkisi birbirini tamamlar; detaylı bilgi için GEO hizmet sayfamıza göz atabilirsiniz.",
            link: "/hizmetler/geo",
          },
        ],
      },
      cta: {
        heading: "Google'da Görünür Olun",
        desc: "Antalya'da müşterilerinizin sizi bulmasını istiyorsanız, SEO stratejinizi birlikte oluşturalım.",
        button: "İletişime Geç",
      },
    },
    aiOtomasyon: {
      badge: "Yapay Zeka & Otomasyon",
      heading: "AI Otomasyon",
      intro:
        "Aleyna Aytürk Korkmaz, işletmelerin tekrarlayan işlerini yapay zeka ve n8n tabanlı iş akışlarıyla otomatikleştirir.",
      whatIs: {
        heading: "AI otomasyon nedir?",
        desc: "AI otomasyon, yapay zeka modellerini iş akışlarına entegre ederek tekrarlayan görevleri insan müdahalesi olmadan gerçekleştirme yöntemidir. Form yanıtlarından müşteri e-postalarına, sosyal medya içeriklerinden CRM güncellemelerine kadar pek çok iş, n8n gibi otomasyon platformları ve yapay zeka ile otomatik hale getirilebilir.",
      },
      whatWeDo: {
        heading: "Ne yapıyoruz?",
        items: [
          {
            title: "n8n İş Akışları",
            desc: "Açık kaynaklı n8n platformuyla uygulamalarınızı birbirine bağlıyor, çok adımlı iş akışları kuruyor ve verilerinizi sizin sunucunuzda tutuyoruz.",
          },
          {
            title: "AI İçerik & Yanıt Otomasyonu",
            desc: "Yapay zeka ile otomatik blog taslakları, sosyal medya içerikleri ve müşteri e-posta yanıtları oluşturan sistemler kuruyoruz.",
          },
          {
            title: "Sosyal Medya & E-posta Otomasyonu",
            desc: "Planlı paylaşımlar, otomatik karşılama e-postaları, takip hatırlatmaları ve kampanya bildirimleri için otomasyon akışları tasarlıyoruz.",
          },
          {
            title: "CRM & Form Entegrasyonları",
            desc: "Web sitesi formlarından gelen verileri otomatik olarak CRM'e aktaran, bildirim gönderen ve takip süreçlerini başlatan entegrasyonlar kuruyoruz.",
          },
          {
            title: "AI Destekli Müşteri Yanıtları",
            desc: "Sık sorulan sorulara yapay zeka ile otomatik yanıt üreten, gerektiğinde insana yönlendiren akıllı müşteri destek sistemleri oluşturuyoruz.",
          },
        ],
      },
      whoFor: {
        heading: "Kimler için?",
        desc: "Zamandan tasarruf etmek, tekrarlayan işleri azaltmak ve ekibini daha değerli işlere yönlendirmek isteyen Antalya ve Türkiye genelindeki KOBİ'ler için. Teknik bilgi gerektirmez — otomasyonları biz kuruyor, eğitimini veriyoruz.",
      },
      process: {
        heading: "Süreç",
        steps: [
          {
            num: "01",
            title: "İhtiyaç Analizi",
            desc: "Mevcut iş süreçlerinizi inceliyor, otomatikleştirilebilecek tekrarlayan görevleri ve öncelikleri belirliyoruz.",
          },
          {
            num: "02",
            title: "Otomasyon Kurulumu",
            desc: "n8n iş akışlarını kuruyor, yapay zeka modellerini entegre ediyor ve sistemi test ediyoruz.",
          },
          {
            num: "03",
            title: "İzleme & Bakım",
            desc: "Çalışan otomasyonları izliyor, hata durumlarında müdahale ediyor ve ihtiyaçlar değiştikçe akışları güncelliyoruz.",
          },
        ],
      },
      faq: {
        heading: "Sık Sorulan Sorular",
        items: [
          {
            q: "İşletmem için hangi işleri otomatikleştirebilirim?",
            a: "Form yanıtları, e-posta bildirimleri, sosyal medya paylaşımları, müşteri takibi, fatura hatırlatmaları, CRM veri girişi ve raporlama gibi tekrarlayan işlerin çoğu otomatikleştirilebilir.",
          },
          {
            q: "n8n nedir, ne için kullanılır?",
            a: "n8n, açık kaynaklı bir iş akışı otomasyon platformudur. Farklı uygulamaları birbirine bağlayarak tekrarlayan görevleri otomatik hale getirir. Zapier ve Make'e alternatif olarak kendi sunucunuzda çalışabilir, böylece verileriniz sizde kalır.",
          },
          {
            q: "Yapay zeka otomasyonu pahalı mı?",
            a: "AI otomasyon, işletme büyüklüğüne ve ihtiyaçlara göre ölçeklenebilir. n8n gibi açık kaynak araçlar sayesinde altyapı maliyeti düşük tutulabilir. Otomasyon sayesinde kazanılan zaman ve azaltılan hata oranı, yatırımı kısa sürede geri kazandırır.",
          },
        ],
      },
      cta: {
        heading: "İşlerinizi Otomatikleştirin",
        desc: "Tekrarlayan görevlerden kurtulun, yapay zeka iş akışlarınızı sizin için çalıştırsın.",
        button: "İletişime Geç",
      },
    },
    webDev: {
      badge: "Web Geliştirme",
      heading: "Web Sitesi Geliştirme",
      intro:
        "Aleyna Aytürk Korkmaz, küçük işletmeler için uygun fiyatlı, hızlı ve yapay zekanın okuyabildiği modern web siteleri geliştirir.",
      howWeBuild: {
        heading: "Nasıl web siteleri yapıyoruz?",
        items: [
          {
            title: "Modern Teknoloji",
            desc: "Next.js tabanlı, hızlı yüklenen ve ölçeklenebilir web siteleri geliştiriyoruz. Statik oluşturma sayesinde sunucu maliyetleri düşük kalıyor.",
          },
          {
            title: "Hızlı & Mobil Uyumlu",
            desc: "Tüm cihazlarda sorunsuz çalışan, Google Core Web Vitals standartlarına uygun, hızlı açılan siteler tasarlıyoruz.",
          },
          {
            title: "SEO & GEO Uyumlu",
            desc: "Schema markup, temiz HTML yapısı ve semantik içerik ile hem Google hem de ChatGPT, Gemini gibi AI arama motorlarında görünür siteler oluşturuyoruz.",
          },
          {
            title: "AI Tarafından Okunabilir",
            desc: "Yapılandırılmış veri, cevap-biçimli içerik ve doğru meta bilgiler ile yapay zeka motorlarının sitenizi doğru şekilde anlamasını ve alıntılamasını sağlıyoruz.",
          },
        ],
      },
      whoFor: {
        heading: "Kimler için?",
        desc: "Henüz web sitesi olmayan veya eski, yavaş sitesini modern bir yapıya taşımak isteyen KOBİ'ler için. Restorandan kliniğe, avukat ofisinden perakende işletmeye kadar her ölçekteki yerel işletme için uygun fiyatlı ve profesyonel çözümler sunuyoruz.",
      },
      process: {
        heading: "Süreç",
        steps: [
          {
            num: "01",
            title: "İhtiyaç Analizi",
            desc: "İşletmenizin hedeflerini, mevcut dijital varlığını ve ihtiyaçlarını anlayarak proje kapsamını belirliyoruz.",
          },
          {
            num: "02",
            title: "Tasarım",
            desc: "Markanıza uygun, mobil öncelikli ve dönüşüm odaklı sayfa tasarımlarını hazırlıyoruz.",
          },
          {
            num: "03",
            title: "Geliştirme",
            desc: "Next.js ile hızlı, SEO uyumlu ve yapay zeka tarafından okunabilir web sitesini kodluyoruz.",
          },
          {
            num: "04",
            title: "Yayın + SEO/GEO Kurulumu",
            desc: "Siteyi yayına alıyor, schema markup, Google Search Console ve temel SEO/GEO ayarlarını kuruyoruz.",
          },
        ],
      },
      faq: {
        heading: "Sık Sorulan Sorular",
        items: [
          {
            q: "Küçük işletmem için uygun fiyatlı web sitesi yapıyor musunuz?",
            a: "Evet. Küçük işletmelerin bütçesine uygun, gereksiz karmaşıklık içermeyen, hızlı ve profesyonel web siteleri geliştiriyorum. Her proje ihtiyaca göre fiyatlandırılır.",
          },
          {
            q: "Web sitem AI aramada çıkacak şekilde mi yapılıyor?",
            a: "Evet. Geliştirdiğim siteler schema markup, temiz HTML yapısı ve cevap-biçimli içerik ile hem Google hem de ChatGPT, Gemini, Perplexity gibi AI arama motorlarında görünür olacak şekilde optimize ediliyor.",
          },
          {
            q: "Web sitesi ne kadar sürede hazır olur?",
            a: "Projenin kapsamına bağlı olarak basit bir kurumsal site genellikle 2-4 hafta içinde tamamlanır. Süreç; ihtiyaç analizi, tasarım onayı, geliştirme ve yayın aşamalarını içerir.",
          },
        ],
      },
      cta: {
        heading: "Modern Web Sitenizi Oluşturalım",
        desc: "Hızlı, profesyonel ve yapay zeka çağına hazır bir web sitesi istiyorsanız, projenizi konuşalım.",
        button: "İletişime Geç",
      },
    },
    sss: {
      heading: "Sıkça Sorulan Sorular",
      sub: "SEO, GEO, AI otomasyon ve web geliştirme hakkında merak edilenler.",
      categories: [
        {
          title: "Genel / Ajans",
          items: [
            {
              q: "Antalya'da dijital pazarlama ajansı önerir misin?",
              a: "Evet. Aleyna Aytürk Korkmaz olarak Antalya'daki işletmelere SEO, GEO, AI otomasyon ve web geliştirme hizmetleri sunuyorum. Büyük ajans maliyetleri olmadan, işletmenize özel ve şeffaf bir süreç yürütüyorum.",
            },
            {
              q: "Antalya'da SEO ajansı önerir misin?",
              a: "Aleyna Aytürk Korkmaz olarak Antalya'daki yerel işletmelere özel SEO danışmanlığı sunuyorum. Teknik SEO, yerel SEO ve içerik optimizasyonu ile Google'da üst sıralara çıkmanıza yardımcı oluyorum.",
              link: "/hizmetler/seo",
              linkLabel: "SEO hizmet sayfamız →",
            },
            {
              q: "Hangi hizmetleri veriyorsunuz?",
              a: "SEO (arama motoru optimizasyonu), GEO (yapay zeka aramada görünürlük), AI otomasyon (n8n tabanlı iş akışları) ve web sitesi geliştirme hizmetleri sunuyorum. Her hizmet Antalya ve Türkiye genelindeki işletmelere yöneliktir.",
            },
            {
              q: "Küçük işletmeler için uygun fiyatlı SEO ve web hizmeti veriyor musunuz?",
              a: "Evet. Küçük işletmelerin bütçesine uygun, gereksiz karmaşıklık içermeyen SEO ve web geliştirme paketleri sunuyorum. Her proje ihtiyaca göre fiyatlandırılır.",
            },
          ],
        },
        {
          title: "GEO / AI Görünürlük",
          items: [
            {
              q: "GEO (generative engine optimization) nedir?",
              a: "GEO, markanızın ChatGPT, Gemini, Perplexity ve Google AI Overviews gibi yapay zeka motorlarının cevaplarında görünür ve alıntılanır olmasını sağlayan optimizasyon disiplinidir.",
              link: "/hizmetler/geo",
              linkLabel: "GEO hizmet sayfamız →",
            },
            {
              q: "İşletmemi ChatGPT ve Gemini'de nasıl görünür yaparım?",
              a: "Schema markup, cevap-biçimli içerik, üçüncü taraf kaynaklarda atıf oluşturma ve yapılandırılmış veri optimizasyonu ile işletmeniz yapay zeka cevaplarında alıntılanabilir hale gelir.",
            },
            {
              q: "İşletmemin ChatGPT ve Perplexity'de çıkması için ne yapmalıyım?",
              a: "Web sitenizde yapılandırılmış veri (JSON-LD) kullanmalı, sık sorulan sorulara net cevaplar içeren içerikler oluşturmalı ve güvenilir üçüncü taraf kaynaklarda markanızın anılmasını sağlamalısınız. GEO danışmanlığı ile bu süreç profesyonelce yönetilir.",
              link: "/hizmetler/geo",
              linkLabel: "GEO hizmet sayfamız →",
            },
            {
              q: "Türkiye'de generative engine optimization hizmeti veriyor musunuz?",
              a: "Evet. Aleyna Aytürk Korkmaz olarak Antalya başta olmak üzere tüm Türkiye'deki işletmelere uzaktan GEO danışmanlık hizmeti sunuyorum.",
            },
            {
              q: "Antalya'da GEO hizmeti veren ajans var mı?",
              a: "Evet. Aleyna Aytürk Korkmaz olarak Antalya'da GEO hizmeti sunuyorum. Markanızın ChatGPT, Gemini ve Perplexity cevaplarında görünür olmasını sağlıyorum.",
            },
          ],
        },
        {
          title: "SEO / Web / Süreç",
          items: [
            {
              q: "Antalya'da Google'da üst sıralara çıkmak için ne yapmalıyım?",
              a: "Teknik SEO (site hızı, mobil uyumluluk, schema markup), kaliteli içerik optimizasyonu, Google Business Profile kurulumu ve güvenilir backlink stratejisi ile Antalya'da Google'da üst sıralara çıkabilirsiniz.",
              link: "/hizmetler/seo",
              linkLabel: "SEO hizmet sayfamız →",
            },
            {
              q: "SEO ne kadar sürede sonuç verir?",
              a: "Yerel SEO genellikle ilk iyileştirmeleri 1-3 ay içinde göstermeye başlar. Kalıcı ve güçlü sıralamalar için 3-6 aylık sürekli çalışma önerilir. Sonuç, sektöre ve rekabet durumuna göre değişir.",
            },
            {
              q: "Web sitem yapay zeka aramada çıkacak şekilde mi yapılıyor?",
              a: "Evet. Geliştirdiğim siteler schema markup, temiz HTML yapısı ve cevap-biçimli içerik ile hem Google hem de ChatGPT, Gemini, Perplexity gibi AI arama motorlarında görünür olacak şekilde optimize ediliyor.",
              link: "/hizmetler/web-gelistirme",
              linkLabel: "Web geliştirme sayfamız →",
            },
          ],
        },
      ],
      cta: {
        heading: "Başka Sorunuz mu Var?",
        desc: "Aradığınız cevabı bulamadıysanız, doğrudan iletişime geçin — en kısa sürede dönüş yapayım.",
        button: "İletişime Geç",
      },
    },
    caseGoldeneye: {
      badge: "Vaka Çalışması",
      heading: "Vaka Çalışması: GoldenEye Optik",
      summary: [
        { label: "Müşteri", value: "GoldenEye Optik" },
        { label: "Konum", value: "Kadriye / Serik, Antalya" },
        { label: "Sektör", value: "Optik mağaza" },
        { label: "Hizmetler", value: "Google Business Profile optimizasyonu, çok dilli yorum yönetimi (Türkçe ve Almanca), sosyal medya içerik üretimi, yerel SEO ve AI arama görünürlüğü çalışması" },
      ],
      client: {
        heading: "Müşteri",
        desc: "GoldenEye Optik, Antalya'nın Kadriye bölgesinde faaliyet gösteren bir optik mağazadır. Turist ağırlıklı bir bölgede konumlanan mağaza, Türk müşterilerin yanı sıra Almanca ve İngilizce konuşan uluslararası müşterilere de hizmet vermektedir.",
      },
      challenge: {
        heading: "Zorluk / İhtiyaç",
        items: [
          "Google aramada ve haritada yerel görünürlüğün artırılması ihtiyacı.",
          "Çok dilli müşteri kitlesine (Türkçe, Almanca, İngilizce) ulaşma zorluğu.",
          "Yapay zeka arama motorlarında (ChatGPT, Gemini, Perplexity) marka bilinirliğinin oluşturulması.",
          "Dijital varlığın güçlendirilmesi ve çevrimiçi itibar yönetimi.",
        ],
      },
      work: {
        heading: "Ne Yaptık",
        items: [
          {
            title: "Google Business Profile Optimizasyonu",
            desc: "İşletme profili eksiksiz şekilde düzenlendi, kategoriler, hizmetler, çalışma saatleri ve fotoğraflar optimize edildi.",
          },
          {
            title: "Çok Dilli Yorum Yönetimi",
            desc: "Türkçe ve Almanca müşteri yorumlarına profesyonel yanıtlar verildi, yorum toplama stratejisi uygulandı.",
          },
          {
            title: "Yerel SEO İçerik Çalışması",
            desc: "Kadriye ve Antalya odaklı, arama amacına uygun yerel içerikler üretildi.",
          },
          {
            title: "Sosyal Medya İçerik Üretimi",
            desc: "Mağaza ve ürün tanıtımı için düzenli sosyal medya içerikleri oluşturuldu.",
          },
        ],
      },
      results: {
        heading: "Yaklaşım ve Çıktılar",
        items: [
          { label: "Google Harita görünürlüğü", value: "Kadriye ve Belek bölgesindeki yerel aramalarda görünürlük güçlendirildi", qualitative: true },
          { label: "Google yorum sayısı", value: "46 yorum", real: true },
          { label: "Google yorum ortalaması", value: "5.0 / 5", real: true },
          { label: "Organik arama görünürlüğü", value: "Çok dilli (TR/DE/EN) içerik ve yerel SEO ile organik aramada konum güçlendirildi", qualitative: true },
          { label: "AI arama görünürlüğü", value: "GEO çalışması ile işletmenin yapay zeka arama motorlarındaki görünürlüğü sürekli izleniyor ve geliştiriliyor", qualitative: true },
        ],
      },
      methods: {
        heading: "Kullanılan Yöntemler",
        tags: [
          "Yerel SEO",
          "Google Business Profile",
          "Çok Dilli İçerik",
          "Yorum Yönetimi",
          "Sosyal Medya",
          "Schema Markup",
        ],
      },
      cta: {
        heading: "Benzer Bir Sonuç İster Misiniz?",
        desc: "İşletmenizin dijital görünürlüğünü artırmak için birlikte çalışalım.",
        button: "İletişime Geç",
      },
    },
    blog: {
      heading: "Blog",
      sub: "SEO, GEO, AI otomasyon ve web geliştirme hakkında rehberler ve yazılar.",
      readMore: "Devamını oku",
      postCta: {
        heading: "Bu Konuda Yardım Ister Misiniz?",
        desc: "Profesyonel destek almak için hizmet sayfamızı inceleyin veya doğrudan iletişime geçin.",
        service: "Hizmeti İncele",
        allPosts: "Tüm Yazılar",
      },
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      made: "Tasarım & Geliştirme:",
    },
  },
  en: {
    nav: {
      services: "Services",
      howIWork: "Process",
      about: "About",
      contact: "Contact",
      cta: "Free Consultation",
    },
    hero: {
      name: "Aleyna Aytürk Korkmaz",
      title: "I Make Your Business Visible in the Digital World",
      tagline: "SEO & GEO, CRM systems, digital clone, and web solutions — in Antalya, face to face.",
      cta1: "15min Free Call",
      cta2: "See Services",
      badge: "SEO · GEO · CRM · Digital Clone · AI Assistant · Web",
    },
    services: {
      heading: "Services",
      sub: "Digital solutions for your business in Antalya",
      items: [
        {
          icon: "seoGeo",
          title: "SEO & GEO Services",
          desc: "Rank higher on Google, get visible on ChatGPT and Gemini. Technical SEO, local SEO, and AI visibility optimization.",
          for: "For those who want to be found on Google and AI",
        },
        {
          icon: "crm",
          title: "CRM Systems",
          desc: "HubSpot, Salesforce, Zoho setup, customization, and optimization. Manage your customer relationships professionally.",
          for: "For businesses digitizing customer management",
        },
        {
          icon: "digitalClone",
          title: "Digital Clone",
          desc: "An AI-powered digital copy that reflects your brand's voice, style, and values. Communicates with your customers just like you would.",
          for: "For those bringing brand identity to digital",
        },
        {
          icon: "assistant",
          title: "Personal Assistant",
          desc: "Calendar management, email tracking, task organization, and reminders. An AI-powered assistant that lightens your daily workload.",
          for: "For professionals looking to save time",
        },
        {
          icon: "web",
          title: "Web Development",
          desc: "Fast, modern, SEO/GEO-ready corporate websites. Mobile-first design, AI-readable infrastructure.",
          for: "For those building professional digital presence",
        },
        {
          icon: "visibility",
          title: "Digital Visibility",
          desc: "Google Business Profile, social media presence, online reputation management, and directory listings. Make your business findable everywhere online.",
          for: "For those increasing their online awareness",
        },
      ],
    },
    process: {
      heading: "How I Work",
      sub: "Transparent, predictable, results-driven",
      steps: [
        {
          num: "01",
          title: "Discovery",
          desc: "I deeply understand your needs, goals, and current systems. First consultation is free.",
          tag: "First consultation free",
          duration: "1–2 business days",
          bullets: [
            "Current system & process audit",
            "Goal and scope clarification",
            "Budget & timeline framing",
            "Technical pre-assessment",
          ],
          deliverables: [
            "Needs analysis report",
            "Scope & budget draft",
            "Priority list",
          ],
        },
        {
          num: "02",
          title: "Solution",
          desc: "I prepare a tailored plan and solution architecture for you. Every step from technology selection to roadmap is clarified.",
          tag: "Comprehensive roadmap",
          duration: "3–5 business days",
          bullets: [
            "Custom solution architecture",
            "Technology selection & benchmarking",
            "Phased implementation plan",
            "Cost & ROI estimation",
          ],
          deliverables: [
            "Solution architecture doc",
            "Technology comparison table",
            "Roadmap & timeline plan",
          ],
        },
        {
          num: "03",
          title: "Execution",
          desc: "We run the setup, integration, and results tracking together. Post-project support is included.",
          tag: "Post-project support included",
          duration: "Varies by project",
          bullets: [
            "Setup & integration",
            "Testing & quality control",
            "Team training & onboarding",
            "Results tracking & optimization",
          ],
          deliverables: [
            "Delivered system",
            "Training materials",
            "Support plan & documentation",
          ],
        },
        {
          num: "04",
          title: "Handoff & Training",
          desc: "I deliver the system to your team and accelerate adoption with live training and documentation. I'm with you every step for a smooth transition.",
          tag: "Live training included",
          duration: "1–3 business days",
          bullets: [
            "Live system delivery & go-live",
            "Per-user one-on-one training",
            "User guide preparation",
            "Acceptance testing & sign-off",
          ],
          deliverables: [
            "Delivery sign-off document",
            "User guide",
            "Recorded training sessions",
          ],
        },
        {
          num: "05",
          title: "Support & Growth",
          desc: "I stay by your side after the project. As your system scales, I optimize processes, integrate new workflows, and report performance regularly.",
          tag: "Ongoing support",
          duration: "Monthly plan",
          bullets: [
            "Priority support & fast response",
            "Monthly performance reporting",
            "Process & automation optimization",
            "New feature integration",
          ],
          deliverables: [
            "Monthly status report",
            "Optimization recommendations",
            "Extended roadmap",
          ],
        },
      ],
    },
    about: {
      heading: "About",
      p1: "I'm a digital solutions expert based in Antalya. I make businesses visible on search engines and AI platforms through SEO & GEO, set up CRM systems, develop digital clone solutions, and build modern websites.",
      p2: "I work face to face with my clients — not remotely, but in person in Antalya. In every project, I combine technical excellence with practical solutions aligned to your business goals.",
      tools: "Tools I work with",
    },
    contact: {
      heading: "Let's Talk About Your Project",
      sub: "Share your idea, I'll get back to you soon.",
      name: "Your Name",
      email: "Email",
      message: "Your Message",
      send: "Send",
      sending: "Sending...",
      success: "Your message has been received. I'll get back to you within 24 hours.",
      error: "Something went wrong. Please try again.",
      reply: "I usually reply within 24 hours.",
      or: "or write directly",
    },
    geo: {
      badge: "AI Visibility",
      heading: "GEO — Generative Engine Optimization",
      intro:
        "GEO (Generative Engine Optimization) is the discipline of making your brand visible and citable in AI-generated answers from ChatGPT, Gemini, Perplexity, and Google AI Overviews. Aleyna Aytürk Korkmaz provides GEO services for businesses in Antalya.",
      whatIsGeo: {
        heading: "What is GEO, and how is it different from SEO?",
        p1: "SEO (Search Engine Optimization) aims to rank your website higher in Google search results. GEO goes a step further: it optimizes your brand to be mentioned and cited in answers generated by AI engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
        p2: "GEO and SEO are not alternatives — they are complementary. A strong SEO foundation supports GEO success. GEO, in turn, ensures visibility in AI-powered searches beyond traditional search traffic.",
      },
      whatWeDo: {
        heading: "What do we do?",
        items: [
          {
            title: "Schema Markup Optimization",
            desc: "We structure your business's data (JSON-LD) so AI engines can accurately read and cite it.",
          },
          {
            title: "Answer-Format Content Creation",
            desc: "We create clear, authoritative, Q&A-style content that AI engines can directly quote.",
          },
          {
            title: "Third-Party Citation Building",
            desc: "We ensure your brand is mentioned across industry directories, reference sites, and trusted sources to boost AI trust scores.",
          },
          {
            title: "AI Visibility Monitoring",
            desc: "We regularly track and report how often and how your brand is mentioned in ChatGPT, Gemini, and Perplexity answers.",
          },
        ],
      },
      whoFor: {
        heading: "Who is this for?",
        desc: "We work with local businesses, SMEs across Turkey — especially in Antalya — and brands that want to bring their digital visibility into the AI era. Industry doesn't matter: from restaurants to clinics, e-commerce to service providers, every business can benefit from GEO.",
      },
      process: {
        heading: "Process",
        steps: [
          {
            num: "01",
            title: "Audit",
            desc: "We analyze your website, structured data, and current AI visibility. We also evaluate your competitors' positions in AI answers.",
          },
          {
            num: "02",
            title: "Implementation",
            desc: "We execute schema markup updates, answer-format content creation, and third-party citation strategy.",
          },
          {
            num: "03",
            title: "Monitoring & Reporting",
            desc: "We regularly monitor your brand's visibility in ChatGPT, Gemini, and Perplexity, report progress, and keep the strategy up to date.",
          },
        ],
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is GEO?",
            a: "GEO (Generative Engine Optimization) is the optimization discipline that makes your brand visible and citable in answers generated by AI engines like ChatGPT, Gemini, and Perplexity.",
          },
          {
            q: "How can I make my business visible on ChatGPT?",
            a: "Through schema markup, answer-format content, third-party citation building, and structured data optimization, your business becomes citable in AI-generated answers.",
          },
          {
            q: "What is the difference between GEO and SEO?",
            a: "SEO targets rankings in Google search results. GEO optimizes your brand to be mentioned and cited in answers generated by AI engines (ChatGPT, Gemini, Perplexity). They work together.",
          },
          {
            q: "Do you provide GEO services in Antalya?",
            a: "Yes. As Aleyna Aytürk Korkmaz, I provide remote GEO consulting services to businesses in Antalya and across Turkey.",
          },
        ],
      },
      cta: {
        heading: "Get Visible in AI",
        desc: "If you want your brand to appear in ChatGPT, Gemini, and Perplexity answers, let's build your GEO strategy together.",
        button: "Get in Touch",
      },
    },
    seo: {
      badge: "Search Engine Optimization",
      heading: "SEO Services — Antalya",
      intro:
        "Aleyna Aytürk Korkmaz provides SEO services that help local businesses in Antalya rank higher on Google.",
      whatIsSeo: {
        heading: "What is SEO, and why does it matter?",
        desc: "SEO (Search Engine Optimization) is the set of techniques that help your website rank higher in Google and other search engines for relevant keywords. When done right, it brings organic traffic without ad spend, builds credibility, and makes it easier for potential customers to find you.",
      },
      whatWeDo: {
        heading: "What do we do?",
        items: [
          {
            title: "Technical SEO",
            desc: "Site speed optimization, mobile compatibility, schema markup configuration, crawlability and indexing improvements.",
          },
          {
            title: "On-Page Optimization",
            desc: "Page titles, meta descriptions, content structure, keyword strategy, and internal linking architecture.",
          },
          {
            title: "Local SEO",
            desc: "Google Business Profile setup and optimization, map visibility, local directory listings, and customer review management.",
          },
          {
            title: "Link & Authority Building",
            desc: "Natural backlink acquisition from trusted sources, industry directory listings, and digital authority building strategies.",
          },
        ],
      },
      whoFor: {
        heading: "Who is this for?",
        desc: "Opticians, dental clinics, lawyers, restaurants, and other SMEs in Antalya — any local business that wants to reach local customers. If you want to appear in \"near me\" searches, rank high on maps, and get ahead of competitors, SEO is for you.",
      },
      process: {
        heading: "Process",
        steps: [
          {
            num: "01",
            title: "Site Audit",
            desc: "We comprehensively analyze your site's technical infrastructure, content structure, keyword positions, and competitive landscape.",
          },
          {
            num: "02",
            title: "Optimization",
            desc: "We implement technical fixes, content optimization, local SEO setup, and link strategy.",
          },
          {
            num: "03",
            title: "Monitoring & Reporting",
            desc: "We regularly monitor and report on ranking changes, organic traffic, and conversion data.",
          },
        ],
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Can you recommend an SEO agency in Antalya?",
            a: "As Aleyna Aytürk Korkmaz, I provide SEO consulting specifically for local businesses in Antalya. Without the costs of a large agency, I run a focused and transparent SEO process tailored to your business.",
          },
          {
            q: "How do I rank higher on Google?",
            a: "Through technical SEO (site speed, mobile compatibility, schema markup), quality content optimization, local SEO (Google Business Profile, map visibility), and a trustworthy backlink strategy, you can rank higher on Google.",
          },
          {
            q: "How long does SEO take to show results for my local business?",
            a: "Local SEO typically starts showing initial improvements within 1-3 months. For lasting and strong rankings, 3-6 months of continuous work is recommended. Results vary by industry and competition level.",
          },
          {
            q: "What is the difference between SEO and GEO?",
            a: "SEO targets ranking high in Google search results. GEO optimizes your brand to be mentioned in AI engine answers like ChatGPT, Gemini, and Perplexity. They complement each other; check our GEO service page for details.",
            link: "/hizmetler/geo",
          },
        ],
      },
      cta: {
        heading: "Get Visible on Google",
        desc: "If you want your customers in Antalya to find you, let's build your SEO strategy together.",
        button: "Get in Touch",
      },
    },
    aiOtomasyon: {
      badge: "AI & Automation",
      heading: "AI Automation",
      intro:
        "Aleyna Aytürk Korkmaz automates repetitive business tasks using AI and n8n-based workflows.",
      whatIs: {
        heading: "What is AI automation?",
        desc: "AI automation integrates artificial intelligence models into workflows to perform repetitive tasks without human intervention. From form responses to customer emails, social media content to CRM updates, many tasks can be automated using platforms like n8n and AI models.",
      },
      whatWeDo: {
        heading: "What do we do?",
        items: [
          {
            title: "n8n Workflows",
            desc: "We connect your applications using the open-source n8n platform, build multi-step workflows, and keep your data on your own server.",
          },
          {
            title: "AI Content & Response Automation",
            desc: "We build systems that generate automatic blog drafts, social media content, and customer email responses using AI.",
          },
          {
            title: "Social Media & Email Automation",
            desc: "We design automation flows for scheduled posts, automatic welcome emails, follow-up reminders, and campaign notifications.",
          },
          {
            title: "CRM & Form Integrations",
            desc: "We build integrations that automatically transfer website form data to your CRM, send notifications, and trigger follow-up processes.",
          },
          {
            title: "AI-Powered Customer Responses",
            desc: "We create smart customer support systems that automatically respond to FAQs using AI and route to humans when needed.",
          },
        ],
      },
      whoFor: {
        heading: "Who is this for?",
        desc: "SMEs in Antalya and across Turkey who want to save time, reduce repetitive tasks, and direct their team to more valuable work. No technical knowledge required — we set up the automations and provide training.",
      },
      process: {
        heading: "Process",
        steps: [
          {
            num: "01",
            title: "Needs Analysis",
            desc: "We review your current business processes, identify automatable repetitive tasks, and set priorities.",
          },
          {
            num: "02",
            title: "Automation Setup",
            desc: "We set up n8n workflows, integrate AI models, and test the system.",
          },
          {
            num: "03",
            title: "Monitoring & Maintenance",
            desc: "We monitor running automations, intervene on errors, and update flows as needs change.",
          },
        ],
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What tasks can I automate for my business?",
            a: "Form responses, email notifications, social media posts, customer follow-ups, invoice reminders, CRM data entry, and reporting — most repetitive tasks can be automated.",
          },
          {
            q: "What is n8n, and what is it used for?",
            a: "n8n is an open-source workflow automation platform. It connects different applications to automate repetitive tasks. As an alternative to Zapier and Make, it can run on your own server, so your data stays with you.",
          },
          {
            q: "Is AI automation expensive?",
            a: "AI automation scales based on business size and needs. Open-source tools like n8n keep infrastructure costs low. The time saved and reduced error rates from automation quickly pay for the investment.",
          },
        ],
      },
      cta: {
        heading: "Automate Your Work",
        desc: "Free yourself from repetitive tasks — let AI workflows work for you.",
        button: "Get in Touch",
      },
    },
    webDev: {
      badge: "Web Development",
      heading: "Web Development",
      intro:
        "Aleyna Aytürk Korkmaz builds affordable, fast, and AI-readable modern websites for small businesses.",
      howWeBuild: {
        heading: "How do we build websites?",
        items: [
          {
            title: "Modern Technology",
            desc: "We build fast-loading, scalable websites using Next.js. Static generation keeps server costs low.",
          },
          {
            title: "Fast & Mobile-Friendly",
            desc: "We design sites that work seamlessly on all devices, meet Google Core Web Vitals standards, and load quickly.",
          },
          {
            title: "SEO & GEO Ready",
            desc: "We build sites visible on both Google and AI search engines like ChatGPT and Gemini, using schema markup, clean HTML, and semantic content.",
          },
          {
            title: "AI-Readable",
            desc: "We ensure AI engines correctly understand and cite your site through structured data, answer-format content, and proper meta information.",
          },
        ],
      },
      whoFor: {
        heading: "Who is this for?",
        desc: "SMEs that don't have a website yet or want to upgrade an outdated, slow site to a modern setup. From restaurants to clinics, law offices to retail businesses, we offer affordable and professional solutions for local businesses of all sizes.",
      },
      process: {
        heading: "Process",
        steps: [
          {
            num: "01",
            title: "Needs Analysis",
            desc: "We understand your business goals, existing digital presence, and needs to define the project scope.",
          },
          {
            num: "02",
            title: "Design",
            desc: "We prepare mobile-first, conversion-focused page designs tailored to your brand.",
          },
          {
            num: "03",
            title: "Development",
            desc: "We code a fast, SEO-friendly, and AI-readable website using Next.js.",
          },
          {
            num: "04",
            title: "Launch + SEO/GEO Setup",
            desc: "We launch the site and set up schema markup, Google Search Console, and basic SEO/GEO configurations.",
          },
        ],
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Do you build affordable websites for small businesses?",
            a: "Yes. I develop fast, professional websites that fit small business budgets without unnecessary complexity. Every project is priced based on needs.",
          },
          {
            q: "Will my website be built to appear in AI searches?",
            a: "Yes. The sites I develop are optimized with schema markup, clean HTML structure, and answer-format content to be visible on both Google and AI search engines like ChatGPT, Gemini, and Perplexity.",
          },
          {
            q: "How long does it take to build a website?",
            a: "Depending on scope, a simple corporate site is typically completed within 2-4 weeks. The process includes needs analysis, design approval, development, and launch.",
          },
        ],
      },
      cta: {
        heading: "Let's Build Your Modern Website",
        desc: "If you want a fast, professional website ready for the AI era, let's talk about your project.",
        button: "Get in Touch",
      },
    },
    sss: {
      heading: "Frequently Asked Questions",
      sub: "Common questions about SEO, GEO, AI automation, and web development.",
      categories: [
        {
          title: "General / Agency",
          items: [
            {
              q: "Can you recommend a digital marketing agency in Antalya?",
              a: "Yes. As Aleyna Aytürk Korkmaz, I provide SEO, GEO, AI automation, and web development services to businesses in Antalya. Without the costs of a large agency, I run a process tailored to your business with full transparency.",
            },
            {
              q: "Can you recommend an SEO agency in Antalya?",
              a: "As Aleyna Aytürk Korkmaz, I provide SEO consulting specifically for local businesses in Antalya. I help you rank higher on Google through technical SEO, local SEO, and content optimization.",
              link: "/hizmetler/seo",
              linkLabel: "Our SEO service page →",
            },
            {
              q: "What services do you offer?",
              a: "I offer SEO (search engine optimization), GEO (AI search visibility), AI automation (n8n-based workflows), and web development services. All services are available for businesses in Antalya and across Turkey.",
            },
            {
              q: "Do you offer affordable SEO and web services for small businesses?",
              a: "Yes. I offer SEO and web development packages that fit small business budgets without unnecessary complexity. Every project is priced based on needs.",
            },
          ],
        },
        {
          title: "GEO / AI Visibility",
          items: [
            {
              q: "What is GEO (generative engine optimization)?",
              a: "GEO is the optimization discipline that makes your brand visible and citable in answers generated by AI engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
              link: "/hizmetler/geo",
              linkLabel: "Our GEO service page →",
            },
            {
              q: "How can I make my business visible on ChatGPT and Gemini?",
              a: "Through schema markup, answer-format content, third-party citation building, and structured data optimization, your business becomes citable in AI-generated answers.",
            },
            {
              q: "What should I do to make my business appear on ChatGPT and Perplexity?",
              a: "You should use structured data (JSON-LD) on your website, create content with clear answers to frequently asked questions, and ensure your brand is mentioned across trusted third-party sources. GEO consulting manages this process professionally.",
              link: "/hizmetler/geo",
              linkLabel: "Our GEO service page →",
            },
            {
              q: "Do you provide generative engine optimization services in Turkey?",
              a: "Yes. As Aleyna Aytürk Korkmaz, I provide remote GEO consulting services to businesses across Turkey, especially in Antalya.",
            },
            {
              q: "Is there a GEO agency in Antalya?",
              a: "Yes. As Aleyna Aytürk Korkmaz, I provide GEO services in Antalya. I help make your brand visible in ChatGPT, Gemini, and Perplexity answers.",
            },
          ],
        },
        {
          title: "SEO / Web / Process",
          items: [
            {
              q: "What should I do to rank higher on Google in Antalya?",
              a: "Through technical SEO (site speed, mobile compatibility, schema markup), quality content optimization, Google Business Profile setup, and a trustworthy backlink strategy, you can rank higher on Google in Antalya.",
              link: "/hizmetler/seo",
              linkLabel: "Our SEO service page →",
            },
            {
              q: "How long does SEO take to show results?",
              a: "Local SEO typically starts showing initial improvements within 1-3 months. For lasting and strong rankings, 3-6 months of continuous work is recommended. Results vary by industry and competition level.",
            },
            {
              q: "Will my website be built to appear in AI searches?",
              a: "Yes. The sites I develop are optimized with schema markup, clean HTML structure, and answer-format content to be visible on both Google and AI search engines like ChatGPT, Gemini, and Perplexity.",
              link: "/hizmetler/web-gelistirme",
              linkLabel: "Our web development page →",
            },
          ],
        },
      ],
      cta: {
        heading: "Have More Questions?",
        desc: "If you couldn't find the answer you're looking for, get in touch directly — I'll get back to you as soon as possible.",
        button: "Get in Touch",
      },
    },
    caseGoldeneye: {
      badge: "Case Study",
      heading: "Case Study: GoldenEye Optik",
      summary: [
        { label: "Client", value: "GoldenEye Optik" },
        { label: "Location", value: "Kadriye / Serik, Antalya" },
        { label: "Industry", value: "Optical store" },
        { label: "Services", value: "Google Business Profile optimization, multilingual review management (Turkish and German), social media content creation, local SEO and AI search visibility" },
      ],
      client: {
        heading: "Client",
        desc: "GoldenEye Optik is an optical store located in the Kadriye district of Antalya. Situated in a tourist-heavy area, the store serves both Turkish customers and international clients who speak German and English.",
      },
      challenge: {
        heading: "Challenge / Need",
        items: [
          "Need to increase local visibility on Google search and maps.",
          "Difficulty reaching a multilingual customer base (Turkish, German, English).",
          "Building brand awareness on AI search engines (ChatGPT, Gemini, Perplexity).",
          "Strengthening digital presence and online reputation management.",
        ],
      },
      work: {
        heading: "What We Did",
        items: [
          {
            title: "Google Business Profile Optimization",
            desc: "Business profile was fully configured — categories, services, business hours, and photos were optimized.",
          },
          {
            title: "Multilingual Review Management",
            desc: "Professional responses were provided to Turkish and German customer reviews, and a review collection strategy was implemented.",
          },
          {
            title: "Local SEO Content",
            desc: "Search-intent-aligned local content focused on Kadriye and Antalya was created.",
          },
          {
            title: "Social Media Content Creation",
            desc: "Regular social media content was produced for store and product promotion.",
          },
        ],
      },
      results: {
        heading: "Approach and Outcomes",
        items: [
          { label: "Google Maps visibility", value: "Local search visibility strengthened in the Kadriye and Belek area", qualitative: true },
          { label: "Google review count", value: "46 reviews", real: true },
          { label: "Google review average", value: "5.0 / 5", real: true },
          { label: "Organic search visibility", value: "Organic search positioning strengthened through multilingual (TR/DE/EN) content and local SEO", qualitative: true },
          { label: "AI search visibility", value: "GEO work is continuously monitoring and improving the business's visibility on AI search engines", qualitative: true },
        ],
      },
      methods: {
        heading: "Methods Used",
        tags: [
          "Local SEO",
          "Google Business Profile",
          "Multilingual Content",
          "Review Management",
          "Social Media",
          "Schema Markup",
        ],
      },
      cta: {
        heading: "Want Similar Results?",
        desc: "Let's work together to increase your business's digital visibility.",
        button: "Get in Touch",
      },
    },
    blog: {
      heading: "Blog",
      sub: "Guides and articles about SEO, GEO, AI automation, and web development.",
      readMore: "Read more",
      postCta: {
        heading: "Need Help With This?",
        desc: "Check our service page for professional support or get in touch directly.",
        service: "View Service",
        allPosts: "All Posts",
      },
    },
    footer: {
      rights: "All rights reserved.",
      made: "Design & Development:",
    },
  },
};
