export interface SourceLink {
  label: string;
  url: string;
}

export interface ChapterItem {
  id: string;
  num: string;
  title: string;
  lead: string;
  paragraphs?: string[];
  items?: { label: string; desc: string }[];
  excerpt?: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  sources?: SourceLink[];
}

export interface FlipbookPage {
  pageNumber: number;
  isCover?: boolean;
  runningHead?: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: { label?: string; text: string }[];
  sources?: SourceLink[];
}

export interface FlipbookData {
  id: string;
  coverTheme: 'criticism' | 'essay';
  coverTitle: string;
  coverSubtitle: string;
  editionLabel: string;
  pages: FlipbookPage[];
}

export interface ComparisonItem {
  id: string;
  aspect: string;
  criticismTitle: string;
  criticismText: string;
  essayTitle: string;
  essayText: string;
  criticismWeight: number;
  source: SourceLink;
}

export interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  source: SourceLink;
}

export const primarySources: SourceLink[] = [
  {
    label: 'KBBI VI Daring — Kritik Sastra',
    url: 'https://kbbi.kemendikdasmen.go.id/entri/kritik%20sastra'
  },
  {
    label: 'KBBI VI Daring — Esai',
    url: 'https://kbbi.kemendikdasmen.go.id/entri/esai'
  },
  {
    label: 'SIBI Kemendikdasmen — Buku Bahasa Indonesia',
    url: 'https://buku.kemendikdasmen.go.id/'
  },
  {
    label: 'Ensiklopedia Sastra Indonesia — Badan Bahasa',
    url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/'
  },
  {
    label: 'Stanford Encyclopedia of Philosophy — Montaigne',
    url: 'https://plato.stanford.edu/entries/montaigne/'
  }
];

export const criticismContent: ChapterItem[] = [
  {
    id: 'ks-1',
    num: '01',
    title: 'Pengertian Kritik Sastra',
    lead: 'Menurut Kamus Besar Bahasa Indonesia (KBBI), kritik sastra adalah pertimbangan baik dan buruk terhadap suatu hasil karya sastra.',
    paragraphs: [
      'Kata "kritik" berasal dari bahasa Yunani "kritikos", yang artinya hakim atau orang yang menimbang. Jadi, kritik sastra bukan sekadar mencari-cari kesalahan penulis atau menuliskan komentar "bagus" dan "jelek" saja.',
      'Dalam pelajaran Bahasa Indonesia SMA, kritik sastra berarti membaca karya (seperti puisi, cerpen, novel, atau drama) secara teliti, menafsirkan isinya, lalu memberi penilaian yang adil berdasarkan bukti dari teks karya itu sendiri.'
    ],
    sources: [
      { label: 'KBBI VI Daring: Kritik Sastra', url: 'https://kbbi.kemendikdasmen.go.id/entri/kritik%20sastra' },
      { label: 'KBBI VI Daring: Kritik', url: 'https://kbbi.kemendikdasmen.go.id/entri/kritik' },
      { label: 'Wikipedia: Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra' }
    ]
  },
  {
    id: 'ks-2',
    num: '02',
    title: 'Tujuan Kritik Sastra',
    lead: 'Kritik sastra ditulis agar karya sastra bisa dipahami lebih dalam dan dinilai secara jujur.',
    items: [
      {
        label: 'Menilai mutu karya secara adil',
        desc: 'Menunjukkan bagian mana yang sudah kuat dan bagian mana yang masih kurang dengan alasan yang masuk akal.'
      },
      {
        label: 'Membantu pembaca memahami isi karya',
        desc: 'Menjelaskan makna tersirat, simbol, konflik, atau pesan cerita yang mungkin terlewat saat dibaca sepintas.'
      },
      {
        label: 'Mendorong karya sastra makin berkembang',
        desc: 'Memberi masukan yang membangun supaya penulis terus mengasah teknik bercerita dan pilihan katanya.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Buku Bahasa Indonesia SMA', url: 'https://buku.kemendikdasmen.go.id/' },
      { label: 'Wikipedia: Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra' }
    ]
  },
  {
    id: 'ks-3',
    num: '03',
    title: 'Fungsi Kritik Sastra',
    lead: 'Kritik sastra punya peran nyata bagi pembaca, pengarang, dan dunia sastra itu sendiri:',
    items: [
      {
        label: 'Untuk pembaca',
        desc: 'Menjadi panduan dalam memilih bacaan bermutu dan melatih kepekaan saat menikmati sebuah karya.'
      },
      {
        label: 'Untuk pengarang',
        desc: 'Menjadi cermin atas karya yang dibuat: bagian mana yang berhasil menyentuh pembaca dan mana yang perlu diperbaiki.'
      },
      {
        label: 'Untuk perkembangan sastra',
        desc: 'Membantu mencatat sejarah sastra, memetakan ciri khas tiap zaman, dan menguji teori sastra pada karya nyata.'
      }
    ],
    sources: [
      { label: 'Ensiklopedia Sastra Indonesia — Badan Bahasa', url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/' },
      { label: 'SIBI Kemendikdasmen', url: 'https://buku.kemendikdasmen.go.id/' }
    ]
  },
  {
    id: 'ks-4',
    num: '04',
    title: 'Ciri-ciri Kritik Sastra',
    lead: 'Supaya tidak tertukar dengan ulasan singkat atau komentar bebas di media sosial, kritik sastra punya ciri khas berikut:',
    items: [
      {
        label: 'Objektif dan seimbang',
        desc: 'Penilaian berangkat dari isi karya, bukan karena suka atau tidak suka secara pribadi kepada pengarangnya.'
      },
      {
        label: 'Disertai bukti kutipan teks',
        desc: 'Setiap pendapat harus dibuktikan lewat kutipan dialog, bait puisi, watak tokoh, atau adegan di dalam karya.'
      },
      {
        label: 'Memuat pertimbangan baik dan buruk',
        desc: 'Tidak berhenti pada ringkasan cerita (sinopsis), melainkan menimbang kelebihan dan kekurangan karya tersebut.'
      },
      {
        label: 'Fokus pada karya sastra',
        desc: 'Objek yang dibahas selalu jelas berupa satu atau beberapa karya sastra, seperti puisi, cerpen, novel, atau drama.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/' },
      { label: 'KBBI VI Daring: Kritik Sastra', url: 'https://kbbi.kemendikdasmen.go.id/entri/kritik%20sastra' }
    ]
  },
  {
    id: 'ks-5',
    num: '05',
    title: 'Struktur Kritik Sastra',
    lead: 'Dalam buku pelajaran Bahasa Indonesia SMA, teks kritik sastra disusun mengikuti pola teks eksposisi yang terdiri atas tiga bagian:',
    items: [
      {
        label: '1. Pernyataan Pendapat (Tesis / Evaluasi Awal)',
        desc: 'Mengenalkan identitas karya (judul, pengarang, tahun terbit) serta menyampaikan pandangan awal penulis kritik tentang karya tersebut.'
      },
      {
        label: '2. Rangkaian Argumen (Deskripsi & Analisis)',
        desc: 'Memaparkan sinopsis singkat, lalu mengupas unsur intrinsik (tema, alur, tokoh, latar, gaya bahasa, amanat) maupun ekstrinsik lengkap dengan bukti kutipan.'
      },
      {
        label: '3. Penegasan Ulang (Simpulan)',
        desc: 'Menegaskan kembali penilaian akhir—baik keunggulan maupun keterbatasan karya—serta rekomendasi bagi pembaca.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/' },
      { label: 'Wikipedia: Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra' }
    ]
  },
  {
    id: 'ks-6',
    num: '06',
    title: 'Jenis Pendekatan Kritik Sastra',
    lead: 'Ahli sastra M.H. Abrams dalam bukunya The Mirror and the Lamp (1953) membagi pendekatan kritik sastra menjadi empat sudut pandang utama:',
    items: [
      {
        label: 'Pendekatan Mimetik (Alam & Realitas)',
        desc: 'Menilai seberapa jauh karya sastra mencerminkan kehidupan nyata, budaya, dan kondisi masyarakat.'
      },
      {
        label: 'Pendekatan Pragmatik (Pembaca)',
        desc: 'Menilai karya dari dampaknya kepada pembaca—apakah menghibur, menggerakkan emosi, atau memberi pelajaran moral.'
      },
      {
        label: 'Pendekatan Ekspresif (Pengarang)',
        desc: 'Melihat karya sebagai cerminan perasaan, pengalaman hidup, dan pemikiran pribadi pengarangnya.'
      },
      {
        label: 'Pendekatan Objektif (Karya Itu Sendiri)',
        desc: 'Fokus meneliti isi teks secara mandiri lewat keterpaduan unsur intrinsiknya, tanpa mengaitkannya dengan hal di luar teks.'
      }
    ],
    sources: [
      { label: 'M.H. Abrams — The Mirror and the Lamp (1953)', url: 'https://en.wikipedia.org/wiki/The_Mirror_and_the_Lamp' },
      { label: 'Wikipedia: Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra' }
    ]
  },
  {
    id: 'ks-7',
    num: '07',
    title: 'Langkah Menyusun Kritik Sastra',
    lead: 'Agar tulisan kritikmu rapi dan meyakinkan, ikuti empat langkah sederhana ini:',
    items: [
      {
        label: 'Langkah 1 · Baca karya sampai tuntas',
        desc: 'Baca puisi, cerpen, atau novel dengan tenang. Tandai bagian yang terasa kuat, unik, atau justru janggal.'
      },
      {
        label: 'Langkah 2 · Catat identitas dan ringkasan isi',
        desc: 'Tulis judul, nama pengarang, penerbit, tahun terbit, dan garis besar ceritanya.'
      },
      {
        label: 'Langkah 3 · Analisis unsur dan kumpulkan bukti',
        desc: 'Perhatikan alur, tokoh, latar, atau pilihan kata. Simpan kutipan kalimat dari teks untuk memperkuat pendapatmu.'
      },
      {
        label: 'Langkah 4 · Tulis penilaian secara santun dan berimbang',
        desc: 'Susun sesuai struktur (tesis, argumen, simpulan) dengan menunjukkan kelebihan sekaligus kekurangannya secara adil.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Modul Bahasa Indonesia SMA', url: 'https://buku.kemendikdasmen.go.id/' }
    ]
  },
  {
    id: 'ks-8',
    num: '08',
    title: 'Ciri Kebahasaan Kritik Sastra',
    lead: 'Dalam buku Bahasa Indonesia SMA, teks kritik sastra memiliki ciri kebahasaan khas agar penilaian terasa logis, objektif, dan meyakinkan:',
    items: [
      {
        label: 'Pernyataan persuasif',
        desc: 'Mengajak pembaca ikut menimbang mutu karya secara bijak, misalnya memakai ungkapan "karya ini layak diapresiasi" atau "bagian awal sebaiknya diringkas".'
      },
      {
        label: 'Pernyataan fakta & kutipan karya',
        desc: 'Menyebutkan identitas buku dan menyertakan kutipan langsung dari teks (dialog tokoh atau larik puisi) sebagai bukti penilaian.'
      },
      {
        label: 'Kata kerja mental (verba mental)',
        desc: 'Kata kerja yang menggambarkan sikap atau proses berpikir kritikus, seperti menilai, menganggap, menduga, menyayangkan, dan membuktikan.'
      },
      {
        label: 'Konjungsi kausalitas & argumentatif',
        desc: 'Kata hubung penjelas alasan dan akibat, seperti karena, sebab, oleh karena itu, sehingga, dan meskipun demikian.'
      },
      {
        label: 'Istilah teknis sastra',
        desc: 'Kosakata khusus dunia sastra yang tepat sasaran, misalnya alur, latar, penokohan, diksi, amanat, satir, dan majas.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Kaidah Kebahasaan Kritik & Esai', url: 'https://buku.kemendikdasmen.go.id/' },
      { label: 'KBBI VI Daring: Kritik Sastra', url: 'https://kbbi.kemendikdasmen.go.id/entri/kritik%20sastra' }
    ]
  }
];

export const essayContent: ChapterItem[] = [
  {
    id: 'es-1',
    num: '01',
    title: 'Pengertian Esai',
    lead: 'Menurut KBBI, esai adalah karangan prosa yang membahas suatu masalah secara sepintas lalu dari sudut pandang pribadi penulisnya. Penulisan baku dalam bahasa Indonesia adalah "esai" (bukan esay atau essay).',
    paragraphs: [
      'Istilah ini dipopulerkan oleh pemikir Prancis Michel de Montaigne pada tahun 1580 lewat bukunya "Essais", yang berarti "percobaan" atau upaya menimbang suatu gagasan secara jujur.',
      'Artinya, esai tidak berusaha menjadi buku teks yang kaku dan serba lengkap. Esai justru memberi ruang bagi penulis untuk membagikan cara pandangnya terhadap isu sehari-hari—mulai dari kebiasaan membaca, pendidikan, lingkungan, budaya, hingga sastra—dengan bahasa yang mengalir dan alasan yang masuk akal.'
    ],
    sources: [
      { label: 'KBBI VI Daring: Esai', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' },
      { label: 'Stanford Encyclopedia: Michel de Montaigne', url: 'https://plato.stanford.edu/entries/montaigne/' },
      { label: 'Wikipedia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' }
    ]
  },
  {
    id: 'es-2',
    num: '02',
    title: 'Tujuan Menulis Esai',
    lead: 'Esai tidak dibuat untuk menggurui pembaca dengan aturan mutlak, melainkan untuk mengajak berdiskusi lewat tulisan:',
    items: [
      {
        label: 'Membagikan sudut pandang pribadi',
        desc: 'Menawarkan cara melihat baru atas persoalan yang mungkin sudah sering ditemui orang banyak.'
      },
      {
        label: 'Meyakinkan pembaca dengan alasan logis',
        desc: 'Menjelaskan sikap penulis dengan bantuan fakta, contoh nyata, dan pengalaman sehari-hari.'
      },
      {
        label: 'Mengajak pembaca ikut berpikir',
        desc: 'Memancing rasa ingin tahu agar pembaca mau meninjau ulang kebiasaan atau anggapan yang selama ini terasa biasa saja.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Buku Bahasa Indonesia SMA', url: 'https://buku.kemendikdasmen.go.id/' },
      { label: 'Wikipedia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' }
    ]
  },
  {
    id: 'es-3',
    num: '03',
    title: 'Fungsi Esai',
    lead: 'Di sekolah maupun media massa, esai punya tiga fungsi penting:',
    items: [
      {
        label: 'Menyuarakan gagasan tentang isu sekitar',
        desc: 'Membahas topik sosial, budaya, teknologi, atau pendidikan dengan bahasa yang mudah dipahami masyarakat.'
      },
      {
        label: 'Melatih berpikir runtut dan kritis',
        desc: 'Membiasakan penulis menyusun pendapat yang jelas alasannya, tidak asal bicara.'
      },
      {
        label: 'Wadah ekspresi gaya bahasa',
        desc: 'Memberi kebebasan bagi penulis memakai gaya tutur yang akrab, segar, namun tetap sopan dan masuk akal.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Buku Bahasa Indonesia', url: 'https://buku.kemendikdasmen.go.id/' }
    ]
  },
  {
    id: 'es-4',
    num: '04',
    title: 'Ciri-ciri Esai',
    lead: 'Esai mudah dikenali lewat beberapa ciri berikut:',
    items: [
      {
        label: 'Berbentuk prosa singkat',
        desc: 'Panjangnya pas dan padat, sehingga bisa dibaca tuntas dalam sekali duduk.'
      },
      {
        label: 'Bersifat subjektif atau personal',
        desc: 'Memperlihatkan opini, sikap, dan suara khas penulisnya, walau tetap perlu alasan yang logis.'
      },
      {
        label: 'Membahas satu sisi menarik (selektif)',
        desc: 'Tidak harus mengupas semua detail topik seperti laporan ilmiah; penulis cukup memilih bagian yang paling bermakna.'
      },
      {
        label: 'Gaya tutur akrab dan khas',
        desc: 'Nadanya tidak sekaku makalah akademik karena penulis bebas memakai sudut pandang personal yang terasa dekat dengan pembaca.'
      }
    ],
    sources: [
      { label: 'KBBI VI Daring: Esai', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' },
      { label: 'SIBI Kemendikdasmen', url: 'https://buku.kemendikdasmen.go.id/' }
    ]
  },
  {
    id: 'es-5',
    num: '05',
    title: 'Struktur Esai',
    lead: 'Sama seperti teks eksposisi, esai yang utuh memiliki tiga bagian utama yang saling tersambung:',
    items: [
      {
        label: '1. Pendahuluan (Pengantar & Tesis)',
        desc: 'Membuka tulisan dengan cerita singkat, pengamatan nyata, atau pertanyaan menarik, lalu menyebutkan gagasan utama (tesis) penulis.'
      },
      {
        label: '2. Isi / Pembahasan (Rangkaian Argumen)',
        desc: 'Menjelaskan alasan-alasan yang mendukung tesis lewat paragraf teratur berisi fakta, contoh sehari-hari, atau perbandingan.'
      },
      {
        label: '3. Penutup (Penegasan Ulang)',
        desc: 'Menyimpulkan inti gagasan secara singkat tanpa mengulang kalimat mentah-mentah, lalu menutup dengan kalimat yang berkesan.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/' },
      { label: 'Wikipedia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' }
    ]
  },
  {
    id: 'es-6',
    num: '06',
    title: 'Jenis-jenis Esai',
    lead: 'Berdasarkan isi dan tujuannya, esai sering dikelompokkan menjadi beberapa jenis:',
    items: [
      {
        label: 'Esai Deskriptif',
        desc: 'Menggambarkan suatu tempat, suasana, atau peristiwa secara hidup agar pembaca ikut merasakannya.'
      },
      {
        label: 'Esai Tajuk (Editorial)',
        desc: 'Mengulas isu hangat di koran atau media untuk menyampaikan pandangan resmi redaksi terhadap berita terbaru.'
      },
      {
        label: 'Esai Cukilan Watak',
        desc: 'Menceritakan sisi menarik dari karakter atau kebiasaan seorang tokoh penting.'
      },
      {
        label: 'Esai Pribadi',
        desc: 'Ditulis langsung dari pengalaman pribadi penulis menggunakan sudut pandang "saya" untuk menarik pelajaran hidup.'
      },
      {
        label: 'Esai Reflektif & Esai Kritik',
        desc: 'Mengajak pembaca merenungkan persoalan hidup atau mengulas isu seni, sastra, dan budaya secara bebas dari kacamata penulis.'
      }
    ],
    sources: [
      { label: 'Wikipedia: Esai (Jenis-jenis Esai)', url: 'https://id.wikipedia.org/wiki/Esai' },
      { label: 'SIBI Kemendikdasmen', url: 'https://buku.kemendikdasmen.go.id/' }
    ]
  },
  {
    id: 'es-7',
    num: '07',
    title: 'Langkah Menyusun Esai',
    lead: 'Menulis esai tidak harus rumit. Kamu bisa mengikuti lima langkah praktis berikut:',
    items: [
      {
        label: '1. Pilih topik yang spesifik',
        desc: 'Ambil satu persoalan yang dekat dengan hidupmu supaya pembahasannya fokus dan tidak melebar ke mana-mana.'
      },
      {
        label: '2. Tentukan gagasan utama (tesis)',
        desc: 'Rumuskan satu kalimat sikap yang jelas: apa pendapatmu tentang topik tersebut?'
      },
      {
        label: '3. Susun 2–3 alasan pendukung',
        desc: 'Siapkan fakta, contoh kejadian sehari-hari, atau perbandingan sederhana untuk memperkuat pendapatmu.'
      },
      {
        label: '4. Tulis dengan kalimat yang mengalir',
        desc: 'Pastikan setiap paragraf menyambung halus ke paragraf berikutnya. Pakai kalimat aktif agar terasa segar.'
      },
      {
        label: '5. Baca ulang dan rapikan ejaan',
        desc: 'Cek kembali kalimat pembuka dan penutupnya, serta pastikan ejaan sudah sesuai kaidah bahasa Indonesia.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Panduan Menulis Esai', url: 'https://buku.kemendikdasmen.go.id/' }
    ]
  },
  {
    id: 'es-8',
    num: '08',
    title: 'Ciri Kebahasaan Esai',
    lead: 'Berbeda dengan laporan ilmiah yang kaku, esai memakai bahasa Indonesia baku yang lebih mengalir namun tetap runtut dan meyakinkan:',
    items: [
      {
        label: 'Bahasa baku yang komunikatif dan luwes',
        desc: 'Tetap mengikuti aturan ejaan bahasa Indonesia (termasuk menulis baku "esai"), tetapi pilihan kalimatnya terasa hangat dan mudah diikuti pembaca umum.'
      },
      {
        label: 'Pernyataan persuasif',
        desc: 'Mengajak pembaca memahami atau ikut merenungkan sudut pandang penulis, misalnya dengan ungkapan "sudah saatnya kita...", "alangkah baiknya jika...".'
      },
      {
        label: 'Kata kerja mental (verba mental)',
        desc: 'Menunjukkan pemikiran, perasaan, atau sikap penulis, seperti meyakini, menyadari, berpendapat, merasakan, dan memandang.'
      },
      {
        label: 'Konjungsi kausalitas & pertentangan',
        desc: 'Memakai kata hubung agar argumen nyambung dan kuat, misalnya karena, oleh sebab itu, namun, padahal, dan sebaliknya.'
      },
      {
        label: 'Istilah sesuai topik & perbandingan ringan',
        desc: 'Menggunakan kosakata sesuai bidang bahasan (misalnya literasi, ekologi, atau budaya digital) serta metafora sederhana supaya gagasan lebih hidup.'
      }
    ],
    sources: [
      { label: 'SIBI Kemendikdasmen — Kaidah Kebahasaan Kritik & Esai', url: 'https://buku.kemendikdasmen.go.id/' },
      { label: 'KBBI VI Daring: Esai', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' }
    ]
  }
];

export const criticismBook: FlipbookData = {
  id: 'criticismBook',
  coverTheme: 'criticism',
  coverTitle: 'Kritik Sastra',
  coverSubtitle: 'Menilai Karya dengan Adil',
  editionLabel: 'EDISI KLASIK · CONTOH KRITIK',
  pages: [
    {
      pageNumber: 1,
      isCover: true,
      title: 'Kritik Sastra',
      subtitle: 'Menilai Karya dengan Adil'
    },
    {
      pageNumber: 2,
      runningHead: 'Daftar Isi',
      title: 'Daftar Isi Buku Mini',
      subtitle: 'Contoh Nyata Kritik Cerpen dan Puisi',
      paragraphs: [
        'Buku ringkas ini menunjukkan cara menilai dua karya sastra Indonesia yang terkenal dengan bahasa yang mudah diikuti.'
      ],
      bullets: [
        { label: 'Hal. 03', text: 'Mengenal Cerpen “Robohnya Surau Kami”' },
        { label: 'Hal. 04', text: 'Isi Kritik: Sindiran Sosial A.A. Navis' },
        { label: 'Hal. 05', text: 'Bedah Unsur Intrinsik Cerpen' },
        { label: 'Hal. 06', text: 'Kelebihan dan Kekurangan Karya' },
        { label: 'Hal. 07', text: 'Kesimpulan Akhir Kritik' },
        { label: 'Hal. 08', text: 'Contoh Kritik Puisi “Aku” (Chairil Anwar)' }
      ],
      sources: [
        { label: 'Ensiklopedia Sastra Indonesia', url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/' }
      ]
    },
    {
      pageNumber: 3,
      runningHead: 'Pengenalan Karya',
      title: 'Cerpen “Robohnya Surau Kami”',
      subtitle: 'Karya A.A. Navis (Majalah Kisah, 1955)',
      paragraphs: [
        'Identitas Karya: Pertama kali terbit di majalah Kisah tahun 1955, lalu dibukukan oleh Penerbit NV Nusantara, Bukittinggi pada 1956.',
        'Ringkasan Cerita: Cerpen ini bercerita tentang seorang kakek penjaga surau (garin) yang tekun beribadah, tetapi hidup menyendiri dari urusan dunia dan keluarga. Suatu hari, tokoh Ajo Sidi bercerita tentang Haji Saleh yang rajin beribadah, namun masuk neraka karena tidak bekerja, tidak mengurus anak cucu, dan membiarkan negerinya melarat.',
        'Cerita sindiran itu membuat sang Kakek terpukul hingga berakhir tragis di suraunya.'
      ],
      sources: [
        { label: 'Ensiklopedia Sastra: Robohnya Surau Kami', url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/artikel/Robohnya_Surau_Kami' }
      ]
    },
    {
      pageNumber: 4,
      runningHead: 'Analisis & Tafsiran',
      title: 'Makna Satir A.A. Navis',
      subtitle: 'Keseimbangan Ibadah dan Kerja Nyata',
      paragraphs: [
        'Melalui cerpen ini, A.A. Navis tidak sedang mengejek orang yang rajin beribadah. Ia justru mengkritik sikap egois: beribadah hanya demi keselamatan diri sendiri sambil melupakan tanggung jawab sosial di masyarakat.',
        'Lewat kisah Haji Saleh, Navis menyentil pembaca dengan pesan sederhana: agama seharusnya membuat manusia rajin bekerja, peduli pada sesama, dan ikut memajukan lingkungannya.',
        'Kekuatan ide seperti inilah yang membuat cerpen pendek ini terus dibaca dan didiskusikan puluhan tahun setelah terbit.'
      ],
      sources: [
        { label: 'Ensiklopedia Sastra: Robohnya Surau Kami', url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/artikel/Robohnya_Surau_Kami' }
      ]
    },
    {
      pageNumber: 5,
      runningHead: 'Bedah Unsur',
      title: 'Unsur Intrinsik Cerpen',
      subtitle: 'Melihat Cara Cerita Dibangun',
      bullets: [
        { label: 'Tema', text: 'Pentingnya keseimbangan antara ibadah pribadi, kerja keras, dan kepedulian sosial.' },
        { label: 'Alur', text: 'Menggunakan alur campuran dengan teknik cerita di dalam cerita melalui kisah Ajo Sidi.' },
        { label: 'Tokoh', text: 'Kakek (polos dan mudah terpukul), Ajo Sidi (kritis dan jenaka), Haji Saleh (gambaran sindiran).' },
        { label: 'Gaya Bahasa', text: 'Banyak memakai kalimat sindiran (satir) dan dialog yang terasa alami.' }
      ],
      sources: [
        { label: 'SIBI Kemendikdasmen — Unsur Intrinsik', url: 'https://buku.kemendikdasmen.go.id/' }
      ]
    },
    {
      pageNumber: 6,
      runningHead: 'Penilaian Seimbang',
      title: 'Kelebihan & Kekurangan',
      subtitle: 'Menilai Karya Tanpa Memihak',
      bullets: [
        { label: 'Kelebihan 1', text: 'Ide ceritanya berani dan disampaikan lewat humor sindiran yang halus, bukan ceramah.' },
        { label: 'Kelebihan 2', text: 'Konflik batin tokohnya kuat dan memancing pembaca untuk merenung setelah selesai membaca.' },
        { label: 'Kekurangan 1', text: 'Bagian awal cerita bergerak agak pelan sebelum masuk ke kisah Haji Saleh.' },
        { label: 'Kekurangan 2', text: 'Beberapa kata serapan atau istilah lokal tahun 1950-an butuh penjelasan singkat untuk pembaca muda.' }
      ]
    },
    {
      pageNumber: 7,
      runningHead: 'Penegasan Ulang',
      title: 'Kesimpulan Kritik Cerpen',
      subtitle: 'Layak Dibaca Lintas Generasi',
      paragraphs: [
        'Secara keseluruhan, “Robohnya Surau Kami” adalah salah satu cerpen terbaik Indonesia karena berhasil menyatukan cerita yang memikat dengan pesan kehidupan yang dalam.',
        'Tempo awal yang agak lambat sama sekali tidak mengurangi kekuatan pesannya. Cerpen ini sangat pas dibaca siswa SMA untuk belajar melihat cara sastrawan mengkritik masalah sosial lewat fiksi.'
      ],
      sources: [
        { label: 'Ensiklopedia Sastra: Robohnya Surau Kami', url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/artikel/Robohnya_Surau_Kami' }
      ]
    },
    {
      pageNumber: 8,
      runningHead: 'Kritik Puisi',
      title: 'Kritik Puisi “Aku” (Chairil Anwar)',
      subtitle: 'Ditulis Maret 1943 · Semangat Angkatan ’45',
      paragraphs: [
        'Puisi “Aku” karya Chairil Anwar (1943) membawa napas baru dalam puisi Indonesia. Chairil meninggalkan gaya bahasa lama yang mendayu-dayu dan memilih kata-kata pendek yang tegas dan penuh tenaga.',
        'Larik “Aku ini binatang jalang / Dari kumpulannya terbuang” menunjukkan keberanian dan tekad hidup yang bebas, dipertegas lagi oleh penutup “Aku mau hidup seribu tahun lagi”.',
        'Bagi sebagian pembaca awam, nada puisinya kadang terkesan terlalu mementingkan diri sendiri. Namun dalam konteks masa penjajahan tahun 1943, puisi ini justru menyuarakan semangat merdeka yang menyala-nyala.'
      ],
      sources: [
        { label: 'Ensiklopedia Sastra: Chairil Anwar', url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/artikel/Chairil_Anwar' }
      ]
    }
  ]
};

export const essayBook: FlipbookData = {
  id: 'essayBook',
  coverTheme: 'essay',
  coverTitle: 'Seni Menulis Esai',
  coverSubtitle: 'Berbagi Gagasan yang Jernih',
  editionLabel: 'SERI PERSPEKTIF · CONTOH ESAI',
  pages: [
    {
      pageNumber: 1,
      isCover: true,
      title: 'Seni Menulis Esai',
      subtitle: 'Berbagi Gagasan yang Jernih'
    },
    {
      pageNumber: 2,
      runningHead: 'Pengantar',
      title: 'Mengenal Esai Lebih Dekat',
      subtitle: 'Mengubah Pengamatan Menjadi Tulisan',
      paragraphs: [
        'Menulis esai itu mirip seperti mengobrol secara tertib dengan pembaca. Penulis tidak wajib membahas segala hal dari A sampai Z; cukup pilih satu hal menarik di sekitar kita lalu ceritakan sudut pandangmu dengan alasan yang jelas.',
        'Di buku mini ini, kamu akan melihat struktur esai dan dua contoh esai ringan yang dekat dengan kehidupan sehari-hari.'
      ],
      sources: [
        { label: 'KBBI VI Daring: Esai', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' }
      ]
    },
    {
      pageNumber: 3,
      runningHead: 'Struktur',
      title: 'Susunan Esai yang Rapi',
      subtitle: 'Pembuka · Isi · Penutup',
      bullets: [
        { label: '1. Pembuka & Tesis', text: 'Mulai dengan pengamatan sehari-hari atau pertanyaan menarik, lalu nyatakan pendapat utamamu.' },
        { label: '2. Isi Argumen', text: 'Tiap paragraf membahas satu alasan pendukung yang dilengkapi contoh nyata atau fakta.' },
        { label: '3. Penutup', text: 'Tarik kesimpulan singkat dengan kalimat penutup yang membuat pembaca ikut berpikir.' }
      ],
      sources: [
        { label: 'SIBI Kemendikdasmen — Struktur Esai', url: 'https://buku.kemendikdasmen.go.id/' }
      ]
    },
    {
      pageNumber: 4,
      runningHead: 'Contoh Esai 1',
      title: 'Membaca Pelan di Era Gawai',
      subtitle: 'Tentang Kebiasaan Membaca Sehari-hari',
      paragraphs: [
        'Setiap hari jari kita menempuh jarak puluhan meter di layar ponsel, melompat dari satu judul berita ke video singkat berdurasi lima belas detik. Sayangnya, waktu kita untuk membaca gagasan secara utuh makin berkurang.',
        'Terbiasa membaca cepat membuat kita ingin jawaban serba instan, tetapi mudah lelah saat menghadapi bacaan yang agak panjang. Padahal, meluangkan waktu sebentar untuk membaca buku atau esai utuh membantu pikiran kita jadi lebih tenang dan tidak mudah terpancing kabar sepintas.'
      ]
    },
    {
      pageNumber: 5,
      runningHead: 'Tips Argumen',
      title: 'Cara Memperkuat Pendapat',
      subtitle: 'Agar Esai Tidak Sekadar Curhat',
      paragraphs: ['Supaya pendapatmu di dalam esai lebih meyakinkan, coba pakai tiga cara sederhana ini:'],
      bullets: [
        { label: 'Pakai contoh nyata', text: 'Sertakan kejadian sehari-hari yang mudah dibayangkan dan dirasakan oleh pembaca.' },
        { label: 'Buat perbandingan', text: 'Bandingkan dua hal yang akrab—misalnya menggulir layar cepat vs membaca buku dengan tenang.' },
        { label: 'Akui sisi lain', text: 'Akui manfaat teknologi sebelum menjelaskan alasanmu, sehingga tulisan terasa adil dan dewasa.' }
      ]
    },
    {
      pageNumber: 6,
      runningHead: 'Contoh Esai 2',
      title: 'Kebiasaan Kecil untuk Bumi',
      subtitle: 'Lingkungan Hidup Dimulai dari Rumah',
      paragraphs: [
        'Isu perubahan iklim sering dibahas lewat angka-angka besar dan konferensi dunia yang terasa jauh dari hidup kita. Akibatnya, banyak orang merasa usaha satu orang tidak akan ada artinya.',
        'Padahal, perubahan kebiasaan selalu dimulai dari langkah kecil di rumah: membawa botol minum sendiri, menghabiskan makanan di piring, atau mengurangi plastik sekali pakai. Hal-hal sederhana itu memang tidak langsung mengubah dunia dalam sehari, tetapi perlahan membentuk budaya hidup yang lebih peduli.'
      ]
    },
    {
      pageNumber: 7,
      runningHead: 'Ulasan Contoh',
      title: 'Mengapa Dua Esai Ini Bekerja?',
      subtitle: 'Melihat Kekuatan Struktur & Gaya',
      bullets: [
        { label: '1. Pendapat utamanya jelas', text: 'Esai pertama langsung menegaskan bahwa membaca pelan bukan menolak teknologi, melainkan menjaga fokus pikiran.' },
        { label: '2. Pembuka langsung mengena', text: 'Esai kedua mengontraskan isu besar dunia dengan kebiasaan di meja makan sehingga terasa dekat.' },
        { label: '3. Bahasanya ringan namun baku', text: 'Keduanya memakai bahasa Indonesia yang baik tanpa istilah yang terlalu berat.' }
      ]
    },
    {
      pageNumber: 8,
      runningHead: 'Penutup Buku',
      title: 'Menemukan Suaramu Sendiri',
      subtitle: 'Siapa Pun Bisa Menulis Esai',
      paragraphs: [
        'Esai yang bagus tidak harus memakai kata-kata yang sulit dipahami. Justru esai yang paling berkesan lahir dari pengamatan yang jujur dan alur pikiran yang rapi.',
        'Mulailah dari hal kecil yang sering kamu pikirkan, tuliskan pendapatmu dengan jelas, dan dukung dengan alasan yang masuk akal.'
      ],
      sources: [
        { label: 'Stanford Encyclopedia: Montaigne', url: 'https://plato.stanford.edu/entries/montaigne/' }
      ]
    }
  ]
};

export const comparisonData: ComparisonItem[] = [
  {
    id: 'pengertian',
    aspect: 'Pengertian',
    criticismTitle: 'Menilai Karya Sastra',
    criticismText: 'Menurut KBBI, kritik sastra adalah pertimbangan baik dan buruk terhadap hasil karya sastra secara objektif dan beralasan.',
    essayTitle: 'Karangan Prosa Personal',
    essayText: 'Menurut KBBI, esai adalah karangan prosa yang membahas suatu masalah secara sepintas lalu dari sudut pandang pribadi penulisnya.',
    criticismWeight: 70,
    source: { label: 'KBBI VI Daring (Kritik Sastra & Esai)', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' }
  },
  {
    id: 'tujuan',
    aspect: 'Tujuan',
    criticismTitle: 'Menilai Mutu & Membantu Pembaca',
    criticismText: 'Menimbang kelebihan dan kekurangan karya secara adil agar pembaca paham maknanya dan pengarang mendapat masukan.',
    essayTitle: 'Berbagi Sudut Pandang',
    essayText: 'Menyampaikan opini atau refleksi penulis untuk meyakinkan pembaca maupun mengajak mereka melihat suatu isu dari sisi baru.',
    criticismWeight: 62,
    source: { label: 'SIBI Kemendikdasmen — Modul SMA', url: 'https://buku.kemendikdasmen.go.id/' }
  },
  {
    id: 'fokus',
    aspect: 'Objek Bahasan',
    criticismTitle: 'Khusus Karya Sastra',
    criticismText: 'Selalu membahas karya sastra—seperti puisi, cerpen, novel, atau naskah drama—beserta unsur di dalamnya.',
    essayTitle: 'Bebas dan Luas',
    essayText: 'Bisa membahas topik apa saja: kebiasaan harian, pendidikan, budaya, teknologi, lingkungan, hingga persoalan sastra.',
    criticismWeight: 78,
    source: { label: 'Wikipedia Bahasa Indonesia: Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra' }
  },
  {
    id: 'sifat',
    aspect: 'Sudut Pandang',
    criticismTitle: 'Lebih Objektif',
    criticismText: 'Harus berpegang pada bukti isi karya dan tidak boleh semata-mata ikut selera pribadi penulis kritik.',
    essayTitle: 'Lebih Subjektif',
    essayText: 'Menonjolkan suara, perasaan, dan cara pandang khas penulis, meskipun tetap perlu alasan yang masuk akal.',
    criticismWeight: 80,
    source: { label: 'SIBI Kemendikdasmen — Kaidah Kritik & Esai', url: 'https://buku.kemendikdasmen.go.id/' }
  },
  {
    id: 'struktur',
    aspect: 'Struktur',
    criticismTitle: 'Tesis · Deskripsi & Analisis · Simpulan',
    criticismText: 'Diawali pengenalan karya dan pendapat awal, dilanjutkan sinopsis serta bedah unsur dengan bukti kutipan, lalu ditutup simpulan.',
    essayTitle: 'Pendahuluan · Isi · Penutup',
    essayText: 'Diawali latar masalah dan tesis, dikembangkan lewat paragraf argumen atau contoh nyata, lalu ditutup penegasan ulang.',
    criticismWeight: 55,
    source: { label: 'SIBI Kemendikdasmen — Bahasa Indonesia XII', url: 'https://buku.kemendikdasmen.go.id/' }
  },
  {
    id: 'pendekatan',
    aspect: 'Cara Membahas',
    criticismTitle: 'Memakai Teori & Unsur Sastra',
    criticismText: 'Menggunakan pisau analisis sastra—seperti pendekatan mimetik, pragmatik, ekspresif, atau objektif (M.H. Abrams).',
    essayTitle: 'Memakai Pengamatan & Logika',
    essayText: 'Mengandalkan pengamatan sekitar, contoh konkret, perbandingan, dan renungan penulis tanpa terikat teori sastra baku.',
    criticismWeight: 72,
    source: { label: 'M.H. Abrams — The Mirror and the Lamp', url: 'https://en.wikipedia.org/wiki/The_Mirror_and_the_Lamp' }
  },
  {
    id: 'hasil',
    aspect: 'Hasil Akhir',
    criticismTitle: 'Penilaian Kualitas Karya',
    criticismText: 'Menghasilkan gambaran jelas mengenai kekuatan, kelemahan, dan mutu karya sastra yang dibahas.',
    essayTitle: 'Gagasan atau Perspektif Baru',
    essayText: 'Menghasilkan pemahaman baru atau bahan renungan segar bagi pembaca tentang persoalan yang dibicarakan.',
    criticismWeight: 66,
    source: { label: 'Wikipedia Bahasa Indonesia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' }
  }
];

export const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'Kritik Sastra',
    question: 'Apa itu kritik sastra?',
    answer: 'Menurut KBBI, kritik sastra adalah pertimbangan baik dan buruk terhadap suatu karya sastra (seperti cerpen, novel, puisi, atau drama). Penilaian ini harus objektif dan didukung bukti kutipan langsung dari isi karya tersebut.',
    source: { label: 'KBBI VI Daring: Kritik Sastra', url: 'https://kbbi.kemendikdasmen.go.id/entri/kritik%20sastra' }
  },
  {
    id: 2,
    category: 'Esai',
    question: 'Apa itu esai, dan mana ejaan yang baku: esai atau essay?',
    answer: 'Ejaan baku bahasa Indonesia adalah "esai". Menurut KBBI, esai adalah karangan prosa yang membahas suatu masalah secara sepintas lalu dari sudut pandang pribadi penulisnya. Topiknya bebas—bisa tentang budaya, pendidikan, teknologi, maupun sastra.',
    source: { label: 'KBBI VI Daring: Esai', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' }
  },
  {
    id: 3,
    category: 'Perbandingan',
    question: 'Apa bedanya kritik sastra dan esai?',
    answer: 'Bedanya ada pada objek dan cara pandangnya. Kritik sastra fokus menilai satu karya sastra secara objektif lengkap dengan kelebihan, kekurangan, dan bukti kutipan. Sedangkan esai bebas membahas isu atau fenomena apa saja dari sudut pandang pribadi penulis.',
    source: { label: 'SIBI Kemendikdasmen — Modul SMA', url: 'https://buku.kemendikdasmen.go.id/' }
  },
  {
    id: 4,
    category: 'Kritik Sastra',
    question: 'Untuk apa kritik sastra dibuat?',
    answer: 'Kritik sastra membantu pembaca memahami pesan dan keindahan sebuah karya, sekaligus memberi masukan yang adil supaya pengarang bisa membuat karya yang lebih baik lagi.',
    source: { label: 'Ensiklopedia Sastra Indonesia', url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/' }
  },
  {
    id: 5,
    category: 'Kritik Sastra',
    question: 'Apa saja struktur teks kritik sastra?',
    answer: 'Dalam pelajaran Bahasa Indonesia SMA, struktur kritik sastra terdiri atas tiga bagian: (1) Pernyataan pendapat awal (tesis) tentang karya; (2) Rangkaian argumen berupa ringkasan isi dan analisis unsur beserta bukti kutipan; serta (3) Penegasan ulang atau simpulan penilaian.',
    source: { label: 'SIBI Kemendikdasmen — Bahasa Indonesia XII', url: 'https://buku.kemendikdasmen.go.id/' }
  },
  {
    id: 6,
    category: 'Esai',
    question: 'Apa saja struktur teks esai?',
    answer: 'Esai juga tersusun dari tiga bagian: (1) Pendahuluan, berisi latar masalah dan pendapat utama (tesis); (2) Isi, berisi alasan, fakta, atau contoh yang mendukung tesis; dan (3) Penutup, berisi kesimpulan singkat yang berkesan.',
    source: { label: 'SIBI Kemendikdasmen — Bahasa Indonesia XII', url: 'https://buku.kemendikdasmen.go.id/' }
  },
  {
    id: 7,
    category: 'Kritik Sastra',
    question: 'Apakah kritik sastra selalu mencari kekurangan karya?',
    answer: 'Tidak. Kritik sastra yang baik justru menilai secara seimbang. Jika sebuah karya memang unggul pada penokohan atau bahasanya, hal itu dijelaskan dengan bukti teks, sambil mencatat kekurangannya secara sopan bila memang ada.',
    source: { label: 'KBBI VI Daring: Kritik Sastra', url: 'https://kbbi.kemendikdasmen.go.id/entri/kritik%20sastra' }
  },
  {
    id: 8,
    category: 'Esai',
    question: 'Apakah menulis esai harus memakai bahasa yang kaku?',
    answer: 'Tidak harus kaku seperti laporan ilmiah. Esai tetap memakai bahasa Indonesia yang baik dan benar agar mudah dipahami, tetapi gaya penyampaiannya boleh lebih santai, akrab, dan mencerminkan karakter penulisnya.',
    source: { label: 'Wikipedia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' }
  },
  {
    id: 9,
    category: 'Penulisan',
    question: 'Bagaimana cara mulai menulis kritik sastra?',
    answer: 'Baca karya sastra sampai selesai, catat identitas bukunya, lalu perhatikan unsur pembangunnya (tokoh, alur, latar, tema, atau gaya bahasa). Kumpulkan kutipan yang mendukung pendapatmu, lalu tulis kelebihan dan kekurangannya dengan bahasa yang adil.',
    source: { label: 'SIBI Kemendikdasmen', url: 'https://buku.kemendikdasmen.go.id/' }
  },
  {
    id: 10,
    category: 'Penulisan',
    question: 'Bagaimana cara membuat esai yang enak dibaca?',
    answer: 'Pilih topik yang spesifik dan dekat dengan pengalaman nyata, tentukan satu pendapat utama (tesis) yang jelas, buka dengan pengamatan menarik, dukung dengan contoh sehari-hari, lalu tutup dengan kalimat renungan yang ringkas.',
    source: { label: 'Stanford Encyclopedia: Montaigne', url: 'https://plato.stanford.edu/entries/montaigne/' }
  }
];
