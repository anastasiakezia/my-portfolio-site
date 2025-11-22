// --- DATA TRANSLATION ---
const TRANSLATIONS = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      projects: "Proyek",
      contact: "Kontak",
      back: "Kembali",
    },
    hero: {
      role: "Web Developer",
      desc: "Menggabungkan logika teknis dan kreativitas desain untuk menciptakan produk digital yang berdampak.",
      btnProject: "Lihat Karya",
      btnCV: "Unduh CV",
      status: "Ready to Collaborate",
    },
    about: {
      title: "Tentang Saya",
      desc: "Profesional dengan pengalaman kuat dalam pengembangan web, desain UI/UX, dan manajemen database. Berfokus pada pembuatan produk yang cepat, scalable, dan berorientasi pada pengguna. Berpengalaman mengelola proyek IT end-to-end, meningkatkan performa produk melalui A/B testing, dan mengubah ide menjadi solusi digital yang berdampak. Saya antusias berkembang di lingkungan yang dinamis sebagai Web Developer yang senang memecahkan masalah nyata melalui teknologi.",
      freelance: "Terbuka untuk Proyek Freelance",
      skills: "Keahlian Teknis",
      exp: "Tahun Pengalaman",
    },
    services: {
      title: "Layanan Saya",
      desc: "Solusi digital komprehensif untuk kebutuhan bisnis Anda.",
      web: {
        title: "Web Development",
        desc: "Membangun website responsif dan dinamis dengan teknologi modern.",
      },
      ui: {
        title: "UI/UX Design",
        desc: "Merancang antarmuka yang estetis dan pengalaman pengguna yang intuitif.",
      },
      app: {
        title: "Web Application",
        desc: "Sistem informasi kompleks atau aplikasi berbasis web untuk operasional bisnis.",
      },
      maint: {
        title: "Maintenance",
        desc: "Pemeliharaan rutin, optimasi kecepatan, dan perbaikan bug website.",
      },
    },
    projects: {
      title: "Karya Pilihan",
      desc: "Eksplorasi teknologi dalam berbagai kategori.",
      loadMore: "Muat Lebih Banyak",
      related: "Proyek Lainnya",
      visit: "Kunjungi Website",
      private: "Internal App",
      tech: "Teknologi",
      summary: "Ringkasan Proyek",
      challenge: "Tantangan",
      solution: "Solusi",
    },
    contact: {
      title1: "Mari",
      title2: "Berkolaborasi.",
      desc: "Ceritakan ide Anda, saya siap mewujudkannya.",
      name: "Nama Lengkap",
      email: "Email",
      msg: "Pesan / Detail Proyek",
      send: "Kirim Pesan",
    },
    cta: {
      title: "Ingin Berkolaborasi?",
      desc: "Mari wujudkan proyek digital Anda bersama saya. Hubungi sekarang untuk diskusi lebih lanjut.",
      btn: "Hubungi Saya",
    },
    footer: {
      desc: "Membangun solusi digital dengan kode yang bersih dan desain yang manusiawi.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Works",
      contact: "Contact",
      back: "Back",
    },
    hero: {
      role: "Web Developer",
      desc: "Combining technical logic and design creativity to build impactful digital products.",
      btnProject: "View Works",
      btnCV: "Download CV",
      status: "Ready to Collaborate",
    },
    about: {
      title: "About Me",
      desc: "A professional with strong experience in web development, UI/UX design, and database management. Focused on building products that are fast, scalable, and user-centered. Experienced in managing end-to-end IT projects, improving product performance through A/B testing, and turning ideas into impactful digital solutions. Highly motivated to grow in a dynamic environment as a Web Developer who enjoys solving real-world problems through technology.",
      freelance: "Open for Freelance Projects",
      skills: "Technical Skills",
      exp: "Years Experience",
    },
    services: {
      title: "My Services",
      desc: "Comprehensive digital solutions for your business needs.",
      web: {
        title: "Web Development",
        desc: "Building responsive and dynamic websites with modern technologies.",
      },
      ui: {
        title: "UI/UX Design",
        desc: "Designing aesthetic interfaces and intuitive user experiences.",
      },
      app: {
        title: "Web Application",
        desc: "Complex information systems or web-based applications for business operations.",
      },
      maint: {
        title: "Maintenance",
        desc: "Routine maintenance, speed optimization, and website bug fixes.",
      },
    },
    projects: {
      title: "Selected Works",
      desc: "Tech exploration across various categories.",
      loadMore: "Load More",
      related: "Other Projects",
      visit: "Visit Website",
      private: "Internal App",
      tech: "Tech Stack",
      summary: "Project Summary",
      challenge: "The Challenge",
      solution: "The Solution",
    },
    contact: {
      title1: "Let's Work",
      title2: "Together.",
      desc: "Tell me your idea, let's make it happen.",
      name: "Full Name",
      email: "Email",
      msg: "Message / Project Details",
      send: "Send Message",
    },
    cta: {
      title: "Want to Collaborate?",
      desc: "Let's realize your digital project together. Contact me now for further discussion.",
      btn: "Contact Me",
    },
    footer: {
      desc: "Building digital solutions with clean code and human-centric design.",
    },
  },
};

// --- DATA PROJECTS ---
const PROJECTS = [
  {
    id: 1,
    content: {
      id: {
        title: "Sistem Sekretariat Rumah Sakit",
        category: "Aplikasi Web",
        shortDesc: "Sistem disposisi surat digital RS.",
        fullDesc:
          "Transformasi total administrasi rumah sakit dari kertas ke digital. Mempercepat proses disposisi surat, mempermudah pelacakan dokumen penting, dan mengurangi penumpukan berkas manual.",
        challenge:
          "Sebelum sistem dibangun, seluruh alur disposisi masih memakai hardcopy dan pencatatan manual. Surat sering terlambat didisposisi, sulit dilacak, rawan hilang, dan laporan bulanan harus dibuat secara manual. Tidak ada histori pergerakan surat, format arsip tidak konsisten, serta data lama tidak terstruktur sehingga menyulitkan migrasi. Workflow juga sangat bergantung pada staf tertentu, menyebabkan bottleneck dan keterlambatan proses administrasi.",
        solution:
          "Dikembangkan sistem digital berbasis Laravel untuk mengotomatisasi alur disposisi. UI Bootstrap dibuat sederhana agar mudah digunakan oleh seluruh unit RS. Sistem menyediakan pelacakan real-time, log aktivitas lengkap, pencarian cepat, dan arsip digital terstruktur. Migrasi data lama dilakukan secara bertahap dengan proses cleaning otomatis dan normalisasi format. Role-based access dan otorisasi memastikan keamanan data. Ditambahkan dashboard laporan, notifikasi, serta otomatisasi alur approval untuk mempercepat proses disposisi.",
      },
      en: {
        title: "Hospital Secretariat System",
        category: "Web App",
        shortDesc: "Digital hospital letter disposition.",
        fullDesc:
          "A complete transformation from paper-based workflows to a digital correspondence management system. It accelerates letter disposition, improves tracking accuracy, and reduces reliance on physical documents.",
        challenge:
          "Previously, all correspondence workflows depended on physical documents and manual logs. Letters were difficult to trace, often delayed, susceptible to being misplaced, and monthly reporting required manual compilation. There was no history of document movement, archival formats were inconsistent, and legacy data was unstructured, making migration difficult. The workflow also depended heavily on specific staff members, creating operational bottlenecks.",
        solution:
          "A web-based disposition system was built using Laravel with secure role & permission management. Bootstrap was used to create a simple and accessible UI for all staff. The system provides real-time tracking, detailed activity logs, fast search, and a structured digital archive. Legacy data migration was processed through automated cleaning and normalization, imported gradually to avoid workflow disruption. Additional features include dashboards, notifications, approval workflow automation, and controlled access to enhance operational efficiency and data security.",
      },
    },
    categoryGroup: "webapp",
    tools: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    type: "internal",
    link: null,
    images: [
      "image/project/hosptital-secretariat/secretary_1.png",
      "image/project/hosptital-secretariat/secretary_2.png",
      "image/project/hosptital-secretariat/secretary_3.png",
      "image/project/hosptital-secretariat/secretary_4.png",
      "image/project/hosptital-secretariat/secretary_5.png",
    ],
  },
  {
    id: 2,
    content: {
      id: {
        title: "Sistem Tiket Kereta Api",
        category: "Aplikasi Web",
        shortDesc: "Platform booking tiket kereta high-traffic.",
        fullDesc:
          "Sistem pemesanan tiket kereta yang menyediakan fitur pencarian jadwal, pemilihan kursi secara visual, checkout, dan dashboard admin untuk melihat data penjualan. Dibangun sebagai simulasi end-to-end proses ticketing dengan alur yang menyerupai sistem komersial.",
        challenge:
          "Proses pemesanan masih dilakukan secara manual pada studi kasus awal. Data kursi tidak terpantau, admin kesulitan melihat jumlah penjualan, dan tidak ada validasi untuk mencegah pemesanan kursi yang sama.",
        solution:
          "Mengembangkan sistem reservasi dengan validasi ketersediaan kursi, modul pemilihan kursi visual, serta proses booking yang terstruktur. Dashboard admin dibuat menggunakan ChartJS agar pengelola dapat memonitor penjualan, sisa kursi, dan jadwal dengan tampilan grafik yang mudah dipahami. Sistem juga menambahkan pengecekan status kursi agar tidak terjadi pemesanan ganda.",
      },
      en: {
        title: "Train Ticketing System",
        category: "Web App",
        shortDesc: "Train ticket reservation platform with seat selection.",
        fullDesc:
          "A train ticket reservation system that provides schedule search, visual seat selection, checkout flow, and an admin dashboard to monitor sales data. Developed as an end-to-end simulation of a real-world ticketing workflow.",
        challenge:
          "The initial manual booking process made it difficult to track seat availability, monitor sales, and prevent duplicate seat reservations. Admins had no centralized view of schedules and passenger data.",
        solution:
          "Implemented a reservation system with seat availability validation, interactive seat selection, and a structured booking flow. An admin dashboard was created using ChartJS to visualize sales, remaining seats, and schedules. Additional seat-locking logic was added to ensure no duplicate seat reservations occur.",
      },
    },
    categoryGroup: "webapp",
    tools: ["Laravel", "PHP", "MySQL", "ChartJS", "JavaScript", "CSS", "HTML"],
    type: "internal",
    link: null,
    images: [
      "image/project/train-ticketing/train_1.PNG",
      "image/project/train-ticketing/train_2.PNG",
      "image/project/train-ticketing/train_3.PNG",
      "image/project/train-ticketing/train_4.PNG",
      "image/project/train-ticketing/train_5.PNG",
      "image/project/train-ticketing/train_6.PNG",
    ],
  },
  {
    id: 3,
    content: {
      id: {
        title: "Profil Perusahaan LeadGeeks",
        category: "Kreatif",
        shortDesc: "Website company profile untuk agensi.",
        fullDesc:
          "Website ini dibuat untuk menampilkan layanan dan portofolio LeadGeeks dengan tampilan yang rapi dan modern. Fokus utamanya adalah membuat halaman yang cepat dibuka, mudah dijelajahi, dan tetap terlihat profesional.",
        challenge:
          "LeadGeeks butuh halaman profil yang bisa dipakai untuk memperkenalkan layanan mereka ke calon klien luar negeri. Sebelumnya, mereka belum punya website yang benar-benar bisa mewakili brand dan menunjukkan hasil kerja mereka.",
        solution:
          "Dibangun website company profile dengan layout Bootstrap supaya strukturnya rapi dan responsif. Animasi ringan dari GSAP dipakai supaya tampilan terasa lebih hidup, sementara gambar dioptimasi ke WebP dan dipasang lazy-loading supaya tetap cepat walaupun ada elemen visual.",
      },
      en: {
        title: "LeadGeeks Company Profile",
        category: "Creative",
        shortDesc: "Company profile website for an agency.",
        fullDesc:
          "A clean and modern company profile website built to showcase LeadGeeks’ services and portfolio. The main goal is to make the site easy to explore, fast to load, and visually appealing.",
        challenge:
          "LeadGeeks needed a proper profile website to present their services to international clients. Previously, they didn’t have a site that clearly represented their brand or showed their previous work.",
        solution:
          "The website was built using a Bootstrap layout for responsive structure, supported with light GSAP animations to make the experience smoother. Images were optimized to WebP with lazy-loading to keep the page fast despite using visual elements.",
      },
    },
    categoryGroup: "creative",
    tools: ["HTML", "CSS", "GSAP", "Bootstrap"],
    type: "public",
    link: "https://leadgeeksprospecting.com/",
    images: [
      "image/project/leadgeeks/company_profile_1.PNG",
      "image/project/leadgeeks/company_profile_2.PNG",
      "image/project/leadgeeks/company_profile_3.PNG",
      "image/project/leadgeeks/company_profile_4.PNG",
      "image/project/leadgeeks/company_profile_5.PNG",
    ],
  },
  {
    id: 4,
    content: {
      id: {
        title: "Airlangga Consulting",
        category: "Korporat",
        shortDesc: "Portal layanan konsultasi bisnis.",
        fullDesc:
          "Website ini dibangun sebagai katalog layanan yang lebih terarah untuk membantu calon klien memahami jenis layanan yang ditawarkan Airlangga Consulting. Setiap layanan dibuat lebih mudah ditemukan dan langsung terhubung ke WhatsApp agar proses konsultasi bisa dimulai tanpa ribet.",
        challenge:
          "Airlangga Consulting ingin memiliki company profile modern yang bisa menampilkan layanan bisnis mereka secara rapi dan mudah dipahami. Sebelumnya mereka belum punya website yang proper, jadi dibuatlah portal informasi yang lebih profesional dan mudah dikelola.",
        solution:
          "Struktur ulang konten agar layanan lebih mudah dipahami, lalu menerapkan desain halaman yang bersih dan modern. WordPress dipilih karena fleksibel, cepat dikembangkan, dan mudah digunakan oleh tim internal yang non-teknis.",
      },
      en: {
        title: "Airlangga Consulting",
        category: "Corporate",
        shortDesc: "Business consulting service portal.",
        fullDesc:
          "This website was created as a more organized service catalog to help potential clients quickly understand the consulting services offered. Each service is structured to be easy to find and includes direct WhatsApp integration for quick consultations.",
        challenge:
          "Airlangga Consulting needed a modern company profile website to properly showcase their business services. They previously had no structured profile online, so a clean and professional portal was created.",
        solution:
          "Restructured the content to make the services easier to understand and applied a clean, modern layout.. WordPress was chosen for its flexibility, easy maintenance, and suitability for non-technical staff.",
      },
    },
    categoryGroup: "corporate",
    tools: ["WordPress", "PHP", "Elementor", "HTML", "CSS", "Yoast SEO"],
    type: "public",
    link: "https://airlanggaconsulting.com/",
    images: [
      "image/project/airlangga-consulting/consulting_1.PNG",
      "image/project/airlangga-consulting/consulting_2.PNG",
      "image/project/airlangga-consulting/consulting_3.PNG",
      "image/project/airlangga-consulting/consulting_4.PNG",
      "image/project/airlangga-consulting/consulting_5.PNG",
    ],
  },
  {
    id: 5,
    content: {
      id: {
        title: "Web Geo Santara",
        category: "Company Profile",
        shortDesc: "Website profil perusahaan Geo Santara.",
        fullDesc:
          "Website company profile yang menampilkan layanan, portofolio, dan informasi perusahaan Geo Santara. Dibangun dengan fokus pada kecepatan, keamanan, dan struktur konten yang rapi.",
        challenge:
          "Website sebelumnya sepenuhnya bergantung pada vendor eksternal, sehingga perubahan kecil pun menjadi lambat dan tidak fleksibel. Desainnya juga tidak konsisten, terlalu padat teks, dan tidak mencerminkan branding maupun standar usability Geo Santara. Selain itu, CRM yang digunakan sulit disesuaikan karena setiap penyesuaian harus melalui pihak ketiga, yang akhirnya membatasi pengembangan fitur untuk klien.",
        solution:
          "Website kemudian dibangun ulang secara custom tanpa bergantung pada platform pihak ketiga, sehingga seluruh struktur, tampilan, dan fungsionalitasnya dapat dikendalikan sepenuhnya oleh tim internal. Desain ditata ulang agar lebih rapi, modern, dan konsisten dengan branding Geo Santara, sekaligus menyederhanakan konten yang sebelumnya terlalu padat. Selain itu, integrasi CRM dibuat lebih fleksibel melalui pengembangan modul dan API yang dapat disesuaikan secara internal, sehingga setiap perubahan fitur dapat dilakukan dengan cepat tanpa harus melibatkan vendor eksternal.",
      },
      en: {
        title: "Geo Santara Website",
        category: "Company Profile",
        shortDesc: "Corporate profile website for Geo Santara.",
        fullDesc:
          "A company profile website showcasing Geo Santara’s services, portfolio, and corporate information. Built with a strong focus on performance, security, and clean content structure.",
        challenge:
          "The previous website relied entirely on an external vendor, making even minor updates slow and inflexible. The design lacked consistency, contained excessive text, and did not reflect Geo Santara’s branding or usability standards. In addition, the CRM in use was difficult to customize because every modification required involvement from the third-party vendor, which ultimately limited our ability to enhance the features provided to clients.",
        solution:
          "The website was rebuilt entirely with a custom coded approach, eliminating reliance on third party platforms and giving the internal team full control over its structure, design, and functionality. The interface was redesigned to be cleaner, more modern, and aligned with Geo Santara’s branding, while streamlining previously text-heavy content. Additionally, the CRM integration was made more flexible through internally developed modules and APIs, enabling faster feature adjustments without requiring involvement from external vendors.",
      },
    },
    categoryGroup: "company",
    tools: [
      "Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "API Integration",
    ],
    type: "public",
    link: "https://geosantaraindo.com/",
    images: [
      "image/project/web-geosantara/web_geo_1.PNG",
      "image/project/web-geosantara/web_geo_2.PNG",
      "image/project/web-geosantara/web_geo_3.PNG",
      "image/project/web-geosantara/web_geo_4.PNG",
      "image/project/web-geosantara/web_geo_5.PNG",
      "image/project/web-geosantara/web_geo_6.PNG",
      "image/project/web-geosantara/web_geo_7.PNG",
      "image/project/web-geosantara/web_geo_8.PNG",
    ],
  },
  {
    id: 6,
    content: {
      id: {
        title: "CMS Web Geo Santara",
        category: "Aplikasi Web",
        shortDesc: "Sistem manajemen konten untuk website Geo Santara.",
        fullDesc:
          "CMS khusus untuk mengelola konten website Geo Santara, termasuk halaman, layanan, portofolio, dan aset media. Dibangun agar admin dapat mengelola data dengan mudah, cepat, dan terstruktur.",
        challenge:
          "Website Geo Santara sebelumnya tidak memiliki sistem manajemen konten yang memadai, sehingga setiap pembaruan mulai dari mengubah teks, menambah halaman, hingga memperbarui informasi layanan harus dilakukan secara manual oleh pihak ketiga. Hal ini membuat proses update menjadi lambat, tidak efisien, dan menyulitkan tim internal untuk merespons kebutuhan bisnis secara cepat. Selain itu, struktur website yang lama tidak dirancang untuk pengelolaan berkelanjutan, sehingga konten mudah berantakan dan sulit distandardisasi. Keterbatasan integrasi dengan CRM juga menghambat karena setiap penyesuaian membutuhkan campur tangan vendor. Kondisi ini menciptakan ketergantungan tinggi, menghambat fleksibilitas, dan menyulitkan perusahaan untuk mengembangkan fitur layanan dengan cepat.",
        solution:
          "Untuk mengatasi seluruh kendala tersebut, saya membangun CMS custom untuk Geo Santara agar tim internal dapat mengelola konten website secara mandiri tanpa ketergantungan pada vendor eksternal. CMS ini saya rancang dengan struktur yang terorganisir sehingga pembaruan teks, penambahan halaman, dan pengaturan informasi layanan dapat dilakukan dengan mudah, cepat, dan konsisten. Sistemnya dibuat scalable dan mudah dipelihara agar konten tetap rapi serta mengikuti standar branding perusahaan. Selain itu, saya mengembangkan integrasi CRM yang lebih fleksibel melalui modul dan API internal, memungkinkan penyesuaian fitur dilakukan langsung oleh tim Geo Santara secara cepat dan efisien.",
      },
      en: {
        title: "Geo Santara CMS",
        category: "Web App",
        shortDesc: "Content management system for Geo Santara’s website.",
        fullDesc:
          "A custom CMS built to manage Geo Santara’s website content, including pages, services, portfolios, and media assets. Designed for simplicity, efficiency, and structured data control.",
        challenge:
          "The previous Geo Santara website lacked a proper content management system, which meant that every update whether adjusting text, adding new pages, or modifying service information had to be handled manually by an external vendor. This resulted in slow, inefficient update cycles and limited the internal team's ability to respond quickly to business needs. The old site structure was also not designed for scalable content management, causing information to become disorganized and difficult to standardize. In addition, limited CRM integration required vendor involvement for even minor adjustments, creating high dependency and reducing flexibility. These constraints ultimately made it challenging for the company to improve services and develop new features efficiently.",
        solution:
          "To address these challenges, I developed a custom CMS for Geo Santara, enabling the internal team to manage website content independently without relying on external vendors. I designed the CMS with a structured and organized architecture, allowing text updates, new pages, and service information changes to be executed easily, quickly, and consistently. The system is built to be scalable and maintainable, ensuring that content remains clean and aligned with the company’s branding standards. In addition, I implemented a more flexible CRM integration through internal modules and APIs, allowing the Geo Santara team to adjust features directly and respond to business needs more efficiently.",
      },
    },
    categoryGroup: "webapp",
    tools: [
      "Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "API Integration",
    ],
    type: "internal",
    link: null,
    images: [
      "image/project/cms-geosantara/cms_1.PNG",
      "image/project/cms-geosantara/cms_2.PNG",
      "image/project/cms-geosantara/cms_3.PNG",
      "image/project/cms-geosantara/cms_4.PNG",
      "image/project/cms-geosantara/cms_5.PNG",
    ],
  },
  {
    id: 7,
    content: {
      id: {
        title: "Blog Geo Santara",
        category: "Aplikasi Web",
        shortDesc: "Platform blog untuk publikasi artikel dan optimasi SEO.",
        fullDesc:
          "Sistem blog untuk Geo Santara yang dirancang untuk mempublikasikan artikel, meningkatkan visibilitas brand, dan memperkuat performa SEO. Mendukung struktur konten yang rapi, metadata lengkap, dan performa halaman yang cepat.",
        challenge:
          "Meskipun website utama sudah dibangun ulang untuk meningkatkan kontrol dan konsistensi branding, mengandalkannya saja berisiko memperlambat perkembangan SEO. Website lama sebenarnya memiliki indexing lebih kuat karena usia dan banyaknya konten, namun tidak dapat diperbarui karena sepenuhnya dikelola vendor. Perusahaan membutuhkan platform mandiri yang cepat dan fleksibel untuk menerbitkan berita, pembaruan proyek, dan konten SEO tanpa batasan pihak ketiga.",
        solution:
          "Untuk mengatasi keterbatasan tersebut, saya membangun platform konten terpisah yang memungkinkan tim mempublikasikan berita, update proyek, dan artikel SEO tanpa bergantung pada website lama yang dikelola vendor. Platform ini dibuat secara custom namun tetap mendukung penggunaan berbagai plugin pendukung seperti plugin SEO, caching, analytics, dan image optimization agar pengelolaan konten menjadi lebih cepat, efisien, dan terstruktur. Dengan arsitektur yang fleksibel dan dapat diperluas melalui plugin, tim internal dapat menambah fitur tanpa perlu pengembangan besar. Pendekatan ini memungkinkan perusahaan mempercepat pertumbuhan organik, menjaga kualitas indexing, dan meningkatkan visibilitas online tanpa hambatan teknis maupun operasional.",
      },
      en: {
        title: "Geo Santara Blog",
        category: "Web App",
        shortDesc:
          "Blog platform for publishing articles with SEO optimization.",
        fullDesc:
          "A blog system designed for publishing articles, increasing brand visibility, and enhancing SEO performance. Supports clean content structure, full metadata control, and fast page rendering.",
        challenge:
          "Although the main website has been rebuilt to improve control and branding consistency, relying on it alone could slow down SEO growth. The older website actually has stronger indexing due to its age and large amount of content, but it cannot be updated because it is fully managed by an external vendor. The company therefore needs an independent, fast, and flexible platform to publish news, project updates, and SEO-driven content without any third-party limitations.",
        solution:
          "To address these limitations, I developed a separate content platform that enables the team to publish news, project updates, and SEO driven articles without relying on the vendor-managed website. The platform is custom-built but designed to support various plugins such as SEO tools, caching, analytics, and image optimization to ensure faster, more efficient, and well-structured content management. With a flexible architecture that can be expanded through plugins, the internal team can add new features without requiring extensive development. This approach allows the company to accelerate organic growth, maintain stronger indexing performance, and enhance its online visibility without technical or operational constraints.",
      },
    },
    categoryGroup: "webapp",
    tools: [
      "WordPress",
      "PHP",
      "MySQL",
      "CSS",
      "RankMath SEO",
      "WP Rocket",
      "Google Search Console",
      "Google Analytics",
    ],
    type: "public",
    link: "https://blog.geosantara.com/",
    images: [
      "image/project/blog-geosantara/blog_geo_1.PNG",
      "image/project/blog-geosantara/blog_geo_2.PNG",
      "image/project/blog-geosantara/blog_geo_3.PNG",
    ],
  },
  {
    id: 8,
    content: {
      id: {
        title: "Sistem Chatbot AI & Automasi n8n Geo Santara",
        category: "Aplikasi Web",
        shortDesc: "Chatbot AI dan alur automasi menggunakan n8n.",
        fullDesc:
          "Sistem Chatbot AI yang terintegrasi dengan automasi n8n untuk Geo Santara. Digunakan untuk menangani pertanyaan pelanggan, mengalirkan lead, mengotomatisasi tugas internal, dan meningkatkan efisiensi operasional perusahaan.",
        challenge:
          "Geo Santara membutuhkan solusi yang efisien dan terjangkau untuk mengelola chat dan lead tanpa harus menggunakan layanan chatbot pihak ketiga yang biayanya tinggi. Sistem yang tersedia saat ini terlalu terbatas, kurang fleksibel, dan tidak memungkinkan kustomisasi. Karena itu, perusahaan memerlukan AI yang dapat dikendalikan sepenuhnya secara internal untuk menangani lead secara real-time.",
        solution:
          "Untuk mengatasi keterbatasan tersebut, saya mengembangkan sistem AI chatbot internal yang sepenuhnya dapat dikontrol oleh Geo Santara tanpa bergantung pada layanan pihak ketiga. Chatbot ini dirancang agar fleksibel, dapat dikustomisasi sesuai kebutuhan bisnis, dan mampu memproses serta merespons lead secara real-time. Dengan integrasi ke CRM dan modul internal lainnya, perusahaan dapat mengatur alur percakapan, mengupdate data, dan menambah fitur baru tanpa biaya tambahan maupun batasan dari vendor eksternal. Solusi ini tidak hanya lebih hemat biaya, tetapi juga memberikan fleksibilitas penuh untuk meningkatkan kualitas layanan pelanggan dan mempercepat penanganan lead.",
      },
      en: {
        title: "Geo Santara AI Chatbot & n8n Automation System",
        category: "Web App",
        shortDesc: "AI chatbot integrated with automated workflows using n8n.",
        fullDesc:
          "An AI-powered chatbot integrated with n8n automation workflows for Geo Santara. Designed to handle customer inquiries, route leads, automate internal tasks, and improve operational efficiency.",
        challenge:
          "Geo Santara needs a more efficient and cost effective way to handle incoming chats and leads without relying on expensive third-party chatbot services. The existing solutions are too limited, lack flexibility, and offer almost no room for customization. As a result, the company requires an internally controlled AI system capable of responding to leads in real time.",
        solution:
          "To address these limitations, I developed an internally controlled AI chatbot system that eliminates the need for costly third-party services. This chatbot is designed to be flexible, fully customizable, and capable of handling and responding to leads in real time. By integrating it with the company’s CRM and internal modules, Geo Santara can manage conversation flows, update data, and expand functionalities without external restrictions or additional costs. This solution provides a more cost efficient approach while giving the company full flexibility to enhance customer service and accelerate lead management.",
      },
    },
    categoryGroup: "webapp",
    tools: ["n8n", "Webhook Integration", "PostgreSQL", "Gemini AI"],
    type: "internal",
    link: null,
    images: [
      "image/project/n8n-geo/n8n_1.PNG",
      "image/project/n8n-geo/n8n_2.PNG",
    ],
  },
  {
    id: 9,
    content: {
      id: {
        title: "Setup Infrastruktur End-to-End Geo Santara",
        category: "Aplikasi Web",
        shortDesc:
          "Konfigurasi infrastruktur lengkap untuk web & sistem automasi.",
        fullDesc:
          "Menyiapkan dan meluncurkan infrastruktur server baru untuk website dan sistem automasi Geo Santara, mencakup penyediaan VPS, pengelolaan domain, konfigurasi routing DNS, serta memastikan integrasi yang mulus antara lingkungan lama dan baru.",
        challenge:
          "Geo Santara memerlukan infrastruktur yang stabil, dapat dikembangkan, dan sepenuhnya dikelola secara internal untuk mendukung website baru serta workflow automasi perusahaan. Sistem hosting sebelumnya masih bergantung pada pihak ketiga, sehingga membatasi fleksibilitas, kontrol, dan kecepatan deployment. Selain itu, domain utama (geosantaraindo.com) baru aktif pada bulan November, sementara pengembangan sistem sudah dimulai sejak jauh sebelumnya, sehingga dibutuhkan konfigurasi routing domain serta persiapan infrastruktur paralel agar proses pembangunan tetap berjalan.",
        solution:
          "Untuk memenuhi kebutuhan tersebut, saya membangun infrastruktur server baru yang sepenuhnya berada di bawah kendali internal Geo Santara. Proses ini mencakup provisioning VPS, konfigurasi server dari awal, pengaturan domain dan DNS routing, serta penyiapan lingkungan paralel untuk memastikan pengembangan dapat berjalan meskipun domain utama belum aktif. Infrastruktur ini dirancang agar scalable, stabil, dan mudah dikelola, memungkinkan deployment yang lebih cepat, fleksibel, dan tidak lagi bergantung pada vendor eksternal. Dengan arsitektur baru ini, seluruh sistem—baik website maupun workflow automasi dapat dioperasikan dan diperluas secara mandiri oleh tim Geo Santara.",
      },
      en: {
        title: "Geo Santara End-to-End Infrastructure Setup",
        category: "Web App",
        shortDesc:
          "Full infrastructure setup for web platform & automation system.",
        fullDesc:
          "Preparing and launching a new server infrastructure for Geo Santara’s website and automation system, including VPS provisioning, domain management, DNS routing configuration, and ensuring seamless integration between the old and new environments.",
        challenge:
          "Geo Santara requires a stable, scalable, and fully internally managed infrastructure to support the new website and internal automation workflows. The previous hosting environment relied on third party providers, which limited flexibility, control, and deployment speed. Additionally, the primary domain (geosantaraindo.com) only became active in November, while system development had started much earlier, creating the need for parallel infrastructure preparation and proper domain routing configuration to keep the development process moving.",
        solution:
          "To address these needs, I built a new server infrastructure fully controlled by Geo Santara’s internal team. This included provisioning the VPS, configuring the server from scratch, setting up domain and DNS routing, and preparing a parallel environment to ensure development could continue even before the main domain became active. The infrastructure was designed to be scalable, stable, and easy to manage, enabling faster and more flexible deployments without dependence on external vendors. With this architecture in place, both the website and automation workflows can be operated and expanded independently by Geo Santara.",
      },
    },
    categoryGroup: "webapp",
    tools: [
      "Linux Server",
      "Nginx",
      "Laravel",
      "IDCloudHost",
      "DigitalOcean VPS",
      "AAPanel",
      "PostgreSQL",
      "n8n automation",
      "Cloudflare DNS",
      "SSL/TLS",
      "Docker",
    ],
    type: "internal",
    link: null,
    images: [
      "image/project/server-geo/server_1.PNG",
      "image/project/server-geo/server_2.jpg",
    ],
  },
  {
    id: 10,
    content: {
      id: {
        title: "Sistem Pencacatan Barang Masuk & Keluar BPOM Ambon",
        category: "Aplikasi Web",
        shortDesc: "Aplikasi pencatatan dan pelacakan barang di BPOM Ambon.",
        fullDesc:
          "Sistem web untuk mencatat barang masuk dan keluar di BPOM Ambon. Dibangun untuk meningkatkan akurasi data, mempercepat proses administrasi, serta menyediakan laporan real-time terkait pergerakan barang.",
        challenge:
          "Mengelola data barang yang tinggi volumenya, memastikan akurasi pencatatan, serta menjaga keamanan data internal instansi pemerintah.",
        solution:
          "Menerapkan CRUD berbasis Laravel, autentikasi aman, role management, validasi ketat pada input, serta dashboard laporan dengan filter dinamis. Sistem juga dilengkapi log aktivitas untuk audit dan pelacakan.",
      },
      en: {
        title: "BPOM Ambon Goods In/Out Recording System",
        category: "Web App",
        shortDesc:
          "A web system for tracking incoming and outgoing goods at BPOM Ambon.",
        fullDesc:
          "A web-based system designed to record, track, and report the movement of goods at BPOM Ambon. Built to improve data accuracy, streamline administrative workflows, and provide real-time reporting.",
        challenge:
          "Handling high-volume item data, maintaining precise records, and ensuring data security for a government environment.",
        solution:
          "Implemented Laravel-based CRUD modules, secure authentication, role-based access control, strict input validation, and a reporting dashboard with dynamic filters. Activity logs were added for audit and tracking purposes.",
      },
    },
    categoryGroup: "webapp",
    tools: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    type: "internal",
    link: null,
    images: ["/api/placeholder/1200/800"],
  },
];
