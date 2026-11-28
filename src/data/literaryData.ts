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
  isBackCover?: boolean;
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
    label: 'SIBI — Buku Bahasa Indonesia Kelas XII',
    url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII'
  },
  {
    label: 'Ruang Murid — Unsur Kritik & Esai',
    url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155'
  },
  {
    label: 'Ruang Murid — Menyusun Kritik & Esai',
    url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/menyusun-kritik-dan-esai-esai-bagian-2-98bac372-2df7-4fd9-863b-678b5036f55c'
  },
  {
    label: 'Ensiklopedia Sastra — Robohnya Surau Kami',
    url: 'https://ensiklopedia.kemendikdasmen.go.id/sastra/artikel/Robohnya_Surau_Kami'
  },
  {
    label: 'Stanford Encyclopedia — Montaigne (Essais)',
    url: 'https://plato.stanford.edu/entries/montaigne/#Work'
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
      { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' },
      { label: 'Wikipedia: Aspek Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra#Aspek-aspek_dalam_Kritik_Sastra' }
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
      { label: 'Wikipedia: Fungsi Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra#Fungsi_Kritik_Sastra' },
      { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' }
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
      { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' },
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
      { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' },
      { label: 'Ruang Murid — Menyusun Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/menyusun-kritik-dan-esai-esai-bagian-2-98bac372-2df7-4fd9-863b-678b5036f55c' }
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
      { label: 'M.H. Abrams — Klasifikasi Teori Sastra', url: 'https://en.wikipedia.org/wiki/The_Mirror_and_the_Lamp#Classification_of_literary_theories' },
      { label: 'Wikipedia: Jenis-jenis Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra#Jenis-jenis_Kritik_Sastra' }
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
      { label: 'Ruang Murid — Menyusun Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/menyusun-kritik-dan-esai-esai-bagian-2-98bac372-2df7-4fd9-863b-678b5036f55c' },
      { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' }
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
      { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' },
      { label: 'Ruang Murid — Menyusun Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/menyusun-kritik-dan-esai-esai-bagian-2-98bac372-2df7-4fd9-863b-678b5036f55c' }
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
      { label: 'Stanford Encyclopedia: Montaigne (Essais)', url: 'https://plato.stanford.edu/entries/montaigne/#Work' },
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
      { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' },
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
      { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' },
      { label: 'Wikipedia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' }
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
      { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' }
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
      { label: 'Wikipedia: Struktur Esai', url: 'https://id.wikipedia.org/wiki/Esai#Struktur' },
      { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' }
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
      { label: 'Wikipedia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' },
      { label: 'SIBI — Cakap Berbahasa & Bersastra XII', url: 'https://buku.kemendikdasmen.go.id/katalog/bahasa-indonesia-tingkat-lanjut-cakap-berbahasa-dan-bersastra-indonesia-untuk-smama-kelas-xii' }
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
      { label: 'Wikipedia: Langkah Pembuatan Esai', url: 'https://id.wikipedia.org/wiki/Esai#Langkah-langkah_pembuatan_esai' },
      { label: 'Ruang Murid — Menyusun Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/menyusun-kritik-dan-esai-esai-bagian-2-98bac372-2df7-4fd9-863b-678b5036f55c' }
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
      { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' },
      { label: 'KBBI VI Daring: Esai', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' }
    ]
  }
];

export const criticismBook: FlipbookData = {
  id: 'criticismBook',
  coverTheme: 'criticism',
  coverTitle: 'Kritik Sastra',
  coverSubtitle: 'Analisis Novel “Gadis Kretek”',
  editionLabel: 'KRITIK SASTRA FEMINISME',
  pages: [
    {
      pageNumber: 1,
      isCover: true,
      title: 'Kritik Sastra',
      subtitle: 'Analisis Novel “Gadis Kretek”'
    },
    {
      pageNumber: 2,
      runningHead: 'Naskah Lengkap · 1/4',
      title: 'Analisis Kritik Terhadap Novel “Gadis Kretek”',
      subtitle: 'Karya Ratih Kumala · Teks Asli Utuh (Paragraf 1)',
      paragraphs: [
        'Novel Gadis Kretek karya Ratih Kumala adalah cerita yang mengisahkan tentang sejarah industri rokok kretek di Indonesia, tetapi juga memiliki unsur drama keluarga dan cinta. Salah satu hal menarik dalam novel ini adalah bagaimana perempuan digambarkan bukan hanya sebagai tokoh pendamping, tetapi juga sebagai sosok yang berpengaruh. Novel ini menghadirkan perspektif feminisme, meski masih ada batasan sosial yang mereka hadapi.'
      ]
    },
    {
      pageNumber: 3,
      runningHead: 'Naskah Lengkap · 2/4',
      title: 'Isi Keseluruhan Teks (Lanjutan)',
      subtitle: 'Paragraf 2–3 · Pendekatan & Tokoh Jeng Yah',
      paragraphs: [
        'Melalui pendekatan kritik sastra feminisme, kita bisa melihat bagaimana novel ini menunjukkan perjuangan perempuan dalam menghadapi aturan sosial yang membatasi peran mereka. Kritik sastra feminisme sendiri adalah cara menganalisis karya sastra dengan melihat bagaimana perempuan digambarkan dalam cerita dan apakah mereka diberikan kebebasan untuk menentukan hidupnya sendiri.',
        'Salah satu tokoh utama perempuan dalam novel ini adalah Jeng Yah. Ia bukan perempuan biasa yang hanya mengikuti perintah atau menunggu nasib. Jeng Yah adalah sosok perempuan cerdas dan mandiri yang berani mengambil peran dalam industri kretek, padahal pada zaman itu bisnis lebih didominasi oleh laki-laki.'
      ]
    },
    {
      pageNumber: 4,
      runningHead: 'Naskah Lengkap · 3/4',
      title: 'Isi Keseluruhan Teks (Lanjutan)',
      subtitle: 'Paragraf 4–5 · Perjuangan & Kesetaraan',
      paragraphs: [
        'Melalui kisah Jeng Yah, Gadis Kretek menunjukkan bahwa perempuan bisa menjadi lebih dari sekadar istri atau ibu rumah tangga. Mereka bisa memiliki impian, mengambil keputusan sendiri, dan berjuang untuk apa yang mereka yakini.',
        'Dalam novel ini, kita bisa melihat bahwa perempuan sering kali menghadapi batasan dari masyarakat, tetapi mereka juga memiliki kekuatan untuk melawan dan membuktikan bahwa mereka mampu. Hal ini sesuai dengan pandangan feminisme yang ingin agar perempuan memiliki hak yang sama dengan laki-laki dalam berbagai aspek kehidupan.'
      ]
    },
    {
      pageNumber: 5,
      runningHead: 'Naskah Lengkap · 4/4',
      title: 'Isi Keseluruhan Teks (Penutup)',
      subtitle: 'Paragraf 6 · Pesan Penutup Naskah',
      paragraphs: [
        'Melalui kritik sastra feminisme, dari novel ini, kita bisa belajar bahwa perempuan harus berani memperjuangkan apa yang mereka inginkan dan tidak takut menghadapi tantangan. Ini menjadi pesan penting, terutama bagi generasi muda, bahwa setiap orang, baik laki-laki maupun perempuan, punya hak yang sama untuk mengejar impian mereka.'
      ],
      sources: [
        { label: 'Brain Academy — Contoh Kritik Sastra Feminisme', url: 'https://www.brainacademy.id/blog/contoh-kritik-sastra' }
      ]
    },
    {
      pageNumber: 6,
      runningHead: 'Halaman Analisis · 1/2',
      title: 'Analisis Struktur Kritik Sastra',
      subtitle: 'Bedah bagian teks “Gadis Kretek” secara terpisah',
      bullets: [
        {
          label: 'Tesis / Pendapat Awal (Paragraf 1)',
          text: 'Mengenalkan novel Gadis Kretek karya Ratih Kumala dan menegaskan fokus utama kritik, yaitu tokoh perempuan berpengaruh dalam perspektif feminisme.'
        },
        {
          label: 'Rangkaian Argumen & Bukti (Paragraf 2–5)',
          text: 'Menjelaskan konsep kritik sastra feminisme lalu membuktikannya melalui ketokohan Jeng Yah yang cerdas, mandiri, dan berani terjun di industri kretek.'
        },
        {
          label: 'Penegasan Ulang / Simpulan (Paragraf 6)',
          text: 'Merangkum nilai perjuangan dan kesetaraan hak sebagai pesan penting bagi generasi muda dari pembacaan novel.'
        }
      ]
    },
    {
      pageNumber: 7,
      runningHead: 'Halaman Analisis · 2/2',
      title: 'Analisis Pendekatan & Kebahasaan',
      subtitle: 'Ciri kritik sastra pada naskah di halaman sebelumnya',
      bullets: [
        {
          label: 'Pendekatan Sastra',
          text: 'Memadukan kritik sastra feminisme (peran dan kebebasan perempuan) dengan pendekatan mimetik yang menyoroti realitas sosial industri kretek.'
        },
        {
          label: 'Verba Mental & Pernyataan Persuasif',
          text: 'Tampak pada ungkapan “bisa melihat”, “menunjukkan”, “diyakini”, serta dorongan bernilai pada kalimat “harus berani memperjuangkan”.'
        },
        {
          label: 'Konjungsi & Istilah Sastra',
          text: 'Memakai konjungsi pertentangan/penjelas (“tetapi”, “meski”, “padahal”) serta istilah sastra seperti novel, tokoh utama, dan perspektif.'
        }
      ],
      sources: [
        { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' }
      ]
    },
    {
      pageNumber: 8,
      isBackCover: true,
      title: 'Akhir Bacaan',
      subtitle: 'Naskah Lengkap & Analisis · Novel “Gadis Kretek” Karya Ratih Kumala',
      sources: [
        { label: 'Brain Academy — Contoh Kritik Sastra', url: 'https://www.brainacademy.id/blog/contoh-kritik-sastra' }
      ]
    }
  ]
};

export const essayBook: FlipbookData = {
  id: 'essayBook',
  coverTheme: 'essay',
  coverTitle: 'Seni Menulis Esai',
  coverSubtitle: 'Tema Dampak Media Sosial',
  editionLabel: 'CONTOH ESAI · ERA DIGITAL',
  pages: [
    {
      pageNumber: 1,
      isCover: true,
      title: 'Seni Menulis Esai',
      subtitle: 'Tema Dampak Media Sosial'
    },
    {
      pageNumber: 2,
      runningHead: 'Naskah Lengkap · 1/4',
      title: 'Contoh Esai Tema Dampak Media Sosial',
      subtitle: 'Teks Asli Utuh (Paragraf 1)',
      paragraphs: [
        'Media sosial telah menjadi bagian tak terpisahkan dari kehidupan masyarakat di era digital. Platform seperti Facebook, Instagram, dan Twitter telah mengubah cara kita berkomunikasi, mengakses informasi, dan bahkan bersosialisasi. Namun, di balik kemudahan dan manfaat yang ditawarkan, media sosial juga memiliki sisi negatif yang perlu diwaspadai.'
      ]
    },
    {
      pageNumber: 3,
      runningHead: 'Naskah Lengkap · 2/4',
      title: 'Isi Keseluruhan Teks (Lanjutan)',
      subtitle: 'Paragraf 2–3 · Dampak Positif & Negatif',
      paragraphs: [
        'Di satu sisi, media sosial memiliki banyak dampak positif. Media sosial dapat menjadi sarana untuk menjalin komunikasi dan membangun koneksi dengan orang lain, baik di dalam maupun luar negeri. Platform ini juga dapat menjadi sumber informasi yang cepat dan mudah diakses. Media sosial dapat dimanfaatkan untuk berbagai tujuan positif, seperti edukasi, promosi bisnis, dan penggalangan dana.',
        'Namun, di sisi lain, media sosial juga memiliki dampak negatif yang tidak dapat diabaikan. Salah satu dampak negatif yang paling sering dijumpai adalah cyberbullying. Cyberbullying dapat memberikan dampak psikologis yang serius bagi korbannya, seperti kecemasan, depresi, dan bahkan bunuh diri. Media sosial juga dapat menjadi wadah penyebaran informasi hoax dan ujaran kebencian yang dapat memicu konflik dan perpecahan di masyarakat.'
      ]
    },
    {
      pageNumber: 4,
      runningHead: 'Naskah Lengkap · 3/4',
      title: 'Isi Keseluruhan Teks (Lanjutan)',
      subtitle: 'Paragraf 4–5 · Kecanduan & Sikap Bijak',
      paragraphs: [
        'Selain itu, penggunaan media sosial yang berlebihan dapat menyebabkan kecanduan dan mengganggu aktivitas sehari-hari. Pengguna media sosial yang kecanduan sering kali menghabiskan waktu berjam-jam di depan layar dan mengabaikan aktivitas lain yang lebih penting, seperti belajar, bekerja, dan bersosialisasi di dunia nyata.',
        'Oleh karena itu, penting untuk menggunakan media sosial dengan bijak dan bertanggung jawab. Kita harus selektif dalam memilih informasi yang dibagikan dan diakses di media sosial. Kita juga harus menjaga privasi dan keamanan data pribadi di media sosial.'
      ]
    },
    {
      pageNumber: 5,
      runningHead: 'Naskah Lengkap · 4/4',
      title: 'Isi Keseluruhan Teks (Penutup)',
      subtitle: 'Paragraf 6 · Ajakan Penutup Naskah',
      paragraphs: [
        'Dengan menggunakan media sosial secara bijak, kita dapat memaksimalkan manfaatnya dan meminimalisir dampak negatifnya. Marilah kita jadikan media sosial sebagai alat yang positif untuk membangun interaksi, menyebarkan informasi yang bermanfaat, dan berkontribusi bagi kemajuan bangsa.'
      ],
      sources: [
        { label: 'Brain Academy — Contoh Esai Dampak Media Sosial', url: 'https://www.brainacademy.id/blog/contoh-esai' }
      ]
    },
    {
      pageNumber: 6,
      runningHead: 'Halaman Analisis · 1/2',
      title: 'Analisis Struktur Esai',
      subtitle: 'Bedah bagian teks “Dampak Media Sosial” secara terpisah',
      bullets: [
        {
          label: 'Pendahuluan / Tesis (Paragraf 1)',
          text: 'Mengenalkan peran media sosial di era digital lalu menetapkan tesis: di balik manfaatnya, terdapat sisi negatif yang perlu diwaspadai.'
        },
        {
          label: 'Isi / Rangkaian Argumen (Paragraf 2–5)',
          text: 'Membandingkan manfaat (komunikasi, edukasi, bisnis) dengan risiko (cyberbullying, hoaks, kecanduan), lalu mengarah pada sikap selektif menjaga privasi.'
        },
        {
          label: 'Penutup / Penegasan Ulang (Paragraf 6)',
          text: 'Menegaskan ulang pentingnya pemakaian bijak dan menutup esai dengan ajakan membangun ruang digital yang positif.'
        }
      ]
    },
    {
      pageNumber: 7,
      runningHead: 'Halaman Analisis · 2/2',
      title: 'Analisis Sudut Pandang & Kebahasaan',
      subtitle: 'Ciri esai pada naskah di halaman sebelumnya',
      bullets: [
        {
          label: 'Sudut Pandang & Gaya Tutur',
          text: 'Memakai sudut pandang personal-inklusif (“kita”) dengan bahasa baku yang komunikatif, akrab, dan mudah diikuti pembaca umum.'
        },
        {
          label: 'Konjungsi Pertentangan & Kausalitas',
          text: 'Menjaga alur argumen lewat penanda “Di satu sisi”, “Namun, di sisi lain”, “Selain itu”, dan “Oleh karena itu”.'
        },
        {
          label: 'Ajakan Persuasif & Istilah Topik',
          text: 'Tampak pada ungkapan “penting untuk menggunakan...” dan “Marilah kita jadikan...”, disertai istilah digital seperti cyberbullying, hoax, dan privasi.'
        }
      ],
      sources: [
        { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' }
      ]
    },
    {
      pageNumber: 8,
      isBackCover: true,
      title: 'Akhir Bacaan',
      subtitle: 'Naskah Lengkap & Analisis · Tema Dampak Media Sosial',
      sources: [
        { label: 'Brain Academy — Contoh Esai', url: 'https://www.brainacademy.id/blog/contoh-esai' }
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
    source: { label: 'KBBI VI Daring: Entri Esai', url: 'https://kbbi.kemendikdasmen.go.id/entri/esai' }
  },
  {
    id: 'tujuan',
    aspect: 'Tujuan',
    criticismTitle: 'Menilai Mutu & Membantu Pembaca',
    criticismText: 'Menimbang kelebihan dan kekurangan karya secara adil agar pembaca paham maknanya dan pengarang mendapat masukan.',
    essayTitle: 'Berbagi Sudut Pandang',
    essayText: 'Menyampaikan opini atau refleksi penulis untuk meyakinkan pembaca maupun mengajak mereka melihat suatu isu dari sisi baru.',
    criticismWeight: 62,
    source: { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' }
  },
  {
    id: 'fokus',
    aspect: 'Objek Bahasan',
    criticismTitle: 'Khusus Karya Sastra',
    criticismText: 'Selalu membahas karya sastra—seperti puisi, cerpen, novel, atau naskah drama—beserta unsur di dalamnya.',
    essayTitle: 'Bebas dan Luas',
    essayText: 'Bisa membahas topik apa saja: kebiasaan harian, pendidikan, budaya, teknologi, lingkungan, hingga persoalan sastra.',
    criticismWeight: 78,
    source: { label: 'Wikipedia: Aspek Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra#Aspek-aspek_dalam_Kritik_Sastra' }
  },
  {
    id: 'sifat',
    aspect: 'Sudut Pandang',
    criticismTitle: 'Lebih Objektif',
    criticismText: 'Harus berpegang pada bukti isi karya dan tidak boleh semata-mata ikut selera pribadi penulis kritik.',
    essayTitle: 'Lebih Subjektif',
    essayText: 'Menonjolkan suara, perasaan, dan cara pandang khas penulis, meskipun tetap perlu alasan yang masuk akal.',
    criticismWeight: 80,
    source: { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' }
  },
  {
    id: 'struktur',
    aspect: 'Struktur',
    criticismTitle: 'Tesis · Deskripsi & Analisis · Simpulan',
    criticismText: 'Diawali pengenalan karya dan pendapat awal, dilanjutkan sinopsis serta bedah unsur dengan bukti kutipan, lalu ditutup simpulan.',
    essayTitle: 'Pendahuluan · Isi · Penutup',
    essayText: 'Diawali latar masalah dan tesis, dikembangkan lewat paragraf argumen atau contoh nyata, lalu ditutup penegasan ulang.',
    criticismWeight: 55,
    source: { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' }
  },
  {
    id: 'pendekatan',
    aspect: 'Cara Membahas',
    criticismTitle: 'Memakai Teori & Unsur Sastra',
    criticismText: 'Menggunakan pisau analisis sastra—seperti pendekatan mimetik, pragmatik, ekspresif, atau objektif (M.H. Abrams).',
    essayTitle: 'Memakai Pengamatan & Logika',
    essayText: 'Mengandalkan pengamatan sekitar, contoh konkret, perbandingan, dan renungan penulis tanpa terikat teori sastra baku.',
    criticismWeight: 72,
    source: { label: 'M.H. Abrams — Klasifikasi Teori Sastra', url: 'https://en.wikipedia.org/wiki/The_Mirror_and_the_Lamp#Classification_of_literary_theories' }
  },
  {
    id: 'hasil',
    aspect: 'Hasil Akhir',
    criticismTitle: 'Penilaian Kualitas Karya',
    criticismText: 'Menghasilkan gambaran jelas mengenai kekuatan, kelemahan, dan mutu karya sastra yang dibahas.',
    essayTitle: 'Gagasan atau Perspektif Baru',
    essayText: 'Menghasilkan pemahaman baru atau bahan renungan segar bagi pembaca tentang persoalan yang dibicarakan.',
    criticismWeight: 66,
    source: { label: 'Wikipedia: Esai', url: 'https://id.wikipedia.org/wiki/Esai' }
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
    source: { label: 'Ruang Murid — Unsur Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/mengidentifikasi-unsur-kritik-dan-esai-esai-bagian-1-340dfc76-4eba-4b9e-886c-1207cd837155' }
  },
  {
    id: 4,
    category: 'Kritik Sastra',
    question: 'Untuk apa kritik sastra dibuat?',
    answer: 'Kritik sastra membantu pembaca memahami pesan dan keindahan sebuah karya, sekaligus memberi masukan yang adil supaya pengarang bisa membuat karya yang lebih baik lagi.',
    source: { label: 'Wikipedia: Fungsi Kritik Sastra', url: 'https://id.wikipedia.org/wiki/Kritik_sastra#Fungsi_Kritik_Sastra' }
  },
  {
    id: 5,
    category: 'Kritik Sastra',
    question: 'Apa saja struktur teks kritik sastra?',
    answer: 'Dalam pelajaran Bahasa Indonesia SMA, struktur kritik sastra terdiri atas tiga bagian: (1) Pernyataan pendapat awal (tesis) tentang karya; (2) Rangkaian argumen berupa ringkasan isi dan analisis unsur beserta bukti kutipan; serta (3) Penegasan ulang atau simpulan penilaian.',
    source: { label: 'SIBI — Buku Bahasa Indonesia Kelas XII', url: 'https://buku.kemendikdasmen.go.id/katalog/Bahasa-Indonesia-Kelas-XII' }
  },
  {
    id: 6,
    category: 'Esai',
    question: 'Apa saja struktur teks esai?',
    answer: 'Esai juga tersusun dari tiga bagian: (1) Pendahuluan, berisi latar masalah dan pendapat utama (tesis); (2) Isi, berisi alasan, fakta, atau contoh yang mendukung tesis; dan (3) Penutup, berisi kesimpulan singkat yang berkesan.',
    source: { label: 'Wikipedia: Struktur Esai', url: 'https://id.wikipedia.org/wiki/Esai#Struktur' }
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
    source: { label: 'Ruang Murid — Menyusun Kritik & Esai', url: 'https://murid.kemendikdasmen.go.id/sumber-belajar/sub-unit/dfcd588b-7596-47ee-8124-b636466d254f/materi/menyusun-kritik-dan-esai-esai-bagian-2-98bac372-2df7-4fd9-863b-678b5036f55c' }
  },
  {
    id: 10,
    category: 'Penulisan',
    question: 'Bagaimana cara membuat esai yang enak dibaca?',
    answer: 'Pilih topik yang spesifik dan dekat dengan pengalaman nyata, tentukan satu pendapat utama (tesis) yang jelas, buka dengan pengamatan menarik, dukung dengan contoh sehari-hari, lalu tutup dengan kalimat renungan yang ringkas.',
    source: { label: 'Wikipedia: Langkah Pembuatan Esai', url: 'https://id.wikipedia.org/wiki/Esai#Langkah-langkah_pembuatan_esai' }
  }
];
