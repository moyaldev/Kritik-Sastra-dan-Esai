export interface ConceptNodeDetail {
  id: string;
  label?: string;
  meta: string;
  title: string;
  body: string;
  points: string[];
}

export interface ConceptBranch {
  id: string;
  title: string;
  jumpTarget: string;
  jumpLabel: string;
  overview: ConceptNodeDetail;
  children: ConceptNodeDetail[];
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
}

export interface FlipbookPage {
  pageNumber: number;
  isCover?: boolean;
  runningHead?: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: { label?: string; text: string }[];
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
}

export interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export interface DifferenceOutlineItem {
  id: string;
  pillar: string;
  criticism: string;
  essay: string;
}

export const differenceOutlineData: DifferenceOutlineItem[] = [
  {
    id: 'objek',
    pillar: 'Objek Kajian',
    criticism: 'Berfokus langsung pada satu karya sastra (cerpen, novel, puisi, atau drama).',
    essay: 'Membahas gagasan, peristiwa, atau fenomena kehidupan secara bebas dan luas.'
  },
  {
    id: 'sifat',
    pillar: 'Sifat & Sudut Pandang',
    criticism: 'Objektif dan analitis; penilaian wajib ditopang bukti teks karya.',
    essay: 'Subjektif dan personal; menonjolkan suara serta cara pandang khas penulis.'
  },
  {
    id: 'tujuan',
    pillar: 'Tujuan Penulisan',
    criticism: 'Menilai mutu estetis, kelebihan, dan kelemahan karya sastra secara adil.',
    essay: 'Mengajak pembaca merenung, memahami sudut pandang baru, dan meyakinkan argumen.'
  },
  {
    id: 'struktur',
    pillar: 'Kerangka Struktur',
    criticism: 'Evaluasi (tesis) · Deskripsi teks & tafsiran · Penegasan ulang.',
    essay: 'Pendahuluan (tesis) · Isi (pengembangan argumen) · Penutup reflektif.'
  },
  {
    id: 'gaya',
    pillar: 'Gaya Bahasa',
    criticism: 'Lugas, sistematis, dan memanfaatkan istilah kajian sastra.',
    essay: 'Luwes, komunikatif, ekspresif, dan akrab dengan pengalaman pembaca.'
  }
];

export const conceptMapData: {
  root: ConceptNodeDetail & { jumpTarget: string; jumpLabel: string };
  branches: ConceptBranch[];
} = {
  root: {
    id: 'root',
    meta: 'Ikhtisar Materi',
    title: 'Kritik Sastra & Esai',
    body: 'Dua bentuk tulisan prosa nonfiksi dalam sastra Indonesia yang sama-sama memadukan pengetahuan, analisis, dan argumen, namun berbeda pada objek kajian serta sudut pandang.',
    points: [
      'Kritik Sastra berpusat pada penilaian objektif-analitis terhadap sebuah karya sastra.',
      'Esai berpusat pada gagasan, refleksi, dan sudut pandang personal penulis terhadap suatu fenomena.',
      'Keduanya menuntut logika yang runtut, bukti yang relevan, serta bahasa yang komunikatif.'
    ],
    jumpTarget: '#perbandingan',
    jumpLabel: 'Bandingkan Keduanya →'
  },
  branches: [
    {
      id: 'kritik',
      title: 'A. Kritik Sastra',
      jumpTarget: '#kritik-sastra',
      jumpLabel: 'Buka Materi Kritik Sastra →',
      overview: {
        id: 'kritik',
        meta: 'Cabang Utama A',
        title: 'Kritik Sastra',
        body: 'Pertimbangan baik dan buruk suatu karya sastra secara objektif dengan menelaah unsur pembangun, makna, kelebihan, serta kekurangannya.',
        points: [
          'Berpijak langsung pada teks sastra (puisi, cerpen, novel, atau drama).',
          'Bertujuan membantu pembaca memahami mutu karya sekaligus memberi masukan bagi pengarang.'
        ]
      },
      children: [
        {
          id: 'kritik-pengertian',
          label: 'Pengertian',
          meta: 'Kritik Sastra · Pengertian',
          title: 'Pengertian Kritik Sastra',
          body: 'Kritik sastra adalah kegiatan penganalisisan, penafsiran, dan penilaian terhadap suatu karya sastra secara objektif dan sistematis berdasarkan kaidah keilmuan sastra.',
          points: [
            'Berasal dari kata Yunani "kritikos" yang berarti hakim atau penimbang.',
            'Bukan sekadar mencela, melainkan menimbang keunggulan dan keterbatasan karya dengan alasan yang dapat dipertanggungjawabkan.'
          ]
        },
        {
          id: 'kritik-tujuan',
          label: 'Tujuan',
          meta: 'Kritik Sastra · Tujuan',
          title: 'Tujuan Kritik Sastra',
          body: 'Menjembatani karya sastra dengan pembaca agar nilai estetis, pesan moral, dan kompleksitas makna di dalamnya dapat dipahami secara utuh.',
          points: [
            'Memberikan penilaian yang adil terhadap kualitas karya.',
            'Meningkatkan daya apresiasi pembaca terhadap sastra.',
            'Mendorong pengarang menghasilkan karya yang lebih matang.'
          ]
        },
        {
          id: 'kritik-fungsi',
          label: 'Fungsi',
          meta: 'Kritik Sastra · Fungsi',
          title: 'Fungsi Kritik Sastra',
          body: 'Kritik sastra berperan penting bagi tiga pihak utama: perkembangan ilmu sastra, sastrawan/pengarang, dan masyarakat pembaca.',
          points: [
            'Bagi pembaca: menjadi panduan memilih dan memahami karya bermutu.',
            'Bagi pengarang: menjadi cermin evaluatif untuk memperluas cakrawala kreatif.',
            'Bagi sastra: memperkaya khazanah teori dan sejarah kesusastraan.'
          ]
        },
        {
          id: 'kritik-ciri',
          label: 'Ciri-ciri',
          meta: 'Kritik Sastra · Ciri-ciri',
          title: 'Ciri-ciri Kritik Sastra',
          body: 'Kritik sastra yang baik memiliki karakter analitis, objektif, dan bertumpu pada bukti tekstual dari karya yang dikaji.',
          points: [
            'Menggunakan data berupa kutipan, peristiwa cerita, atau diksi dari karya.',
            'Memberikan pertimbangan baik-buruk disertai alasan logis.',
            'Menggunakan bahasa lugas, baku, dan argumentatif.'
          ]
        },
        {
          id: 'kritik-struktur',
          label: 'Struktur',
          meta: 'Kritik Sastra · Struktur',
          title: 'Struktur Kritik Sastra',
          body: 'Struktur teks kritik sastra mengikuti pola argumentasi analitis yang tersusun dari pengenalan hingga penilaian akhir.',
          points: [
            'Evaluasi / Tesis (Orientasi): memperkenalkan identitas karya dan pernyataan penilaian awal.',
            'Deskripsi Teks & Tafsiran: memaparkan sinopsis, analisis unsur intrinsik-ekstrinsik, serta bukti kutipan.',
            'Penegasan Ulang / Kesimpulan: merangkum keunggulan, kekurangan, serta rekomendasi pembacaan.'
          ]
        },
        {
          id: 'kritik-jenis',
          label: 'Jenis-jenis',
          meta: 'Kritik Sastra · Jenis-jenis',
          title: 'Jenis-jenis Kritik Sastra',
          body: 'Berdasarkan pendekatan terhadap karya, kritik sastra diklasifikasikan ke dalam beberapa ragam utama.',
          points: [
            'Pendekatan Mimetik (hubungan karya dengan realitas sosial).',
            'Pendekatan Pragmatik (dampak karya terhadap pembaca).',
            'Pendekatan Ekspresif (keterkaitan karya dengan batin pengarang).',
            'Pendekatan Objektif (fokus penuh pada struktur otonom teks).'
          ]
        },
        {
          id: 'kritik-langkah',
          label: 'Langkah-langkah',
          meta: 'Kritik Sastra · Langkah Penyusunan',
          title: 'Langkah Membuat Kritik Sastra',
          body: 'Menyusun kritik sastra memerlukan proses membaca yang teliti sebelum merumuskan penilaian.',
          points: [
            'Membaca karya secara utuh dan berulang (close reading).',
            'Mencatat identitas karya dan menelaah unsur intrinsik serta ekstrinsiknya.',
            'Mengumpulkan kutipan bukti sebagai dasar argumen.',
            'Menulis draf sesuai struktur evaluasi, deskripsi/analisis, dan simpulan.'
          ]
        }
      ]
    },
    {
      id: 'esai',
      title: 'B. Esai',
      jumpTarget: '#esai',
      jumpLabel: 'Buka Materi Esai →',
      overview: {
        id: 'esai',
        meta: 'Cabang Utama B',
        title: 'Esai',
        body: 'Karangan prosa yang membahas suatu masalah secara sepintas lalu dari sudut pandang pribadi penulisnya.',
        points: [
          'Tidak terikat pada satu karya sastra tertentu; topiknya sangat luas (budaya, pendidikan, sosial, hingga sastra).',
          'Menonjolkan gaya bahasa khas penulis dan ketajaman refleksi.'
        ]
      },
      children: [
        {
          id: 'esai-pengertian',
          label: 'Pengertian',
          meta: 'Esai · Pengertian',
          title: 'Pengertian Esai',
          body: 'Esai adalah karangan prosa nonfiksi yang mengupas suatu persoalan, fenomena, atau gagasan dari sudut pandang subjektif dan reflektif penulis.',
          points: [
            'Menurut KBBI, esai adalah karangan prosa yang membahas suatu masalah secara sepintas lalu dari sudut pandang pribadi penulisnya.',
            'Panjangnya relatif singkat, padat, dan memikat pembaca untuk ikut berpikir.'
          ]
        },
        {
          id: 'esai-tujuan',
          label: 'Tujuan',
          meta: 'Esai · Tujuan',
          title: 'Tujuan Penulisan Esai',
          body: 'Meyakinkan, menggugah kesadaran, atau menawarkan cara pandang baru kepada pembaca mengenai suatu isu.',
          points: [
            'Mengungkapkan opini atau refleksi penulis secara terstruktur.',
            'Mengajak pembaca meninjau fenomena biasa dengan kacamata yang lebih kritis.'
          ]
        },
        {
          id: 'esai-fungsi',
          label: 'Fungsi',
          meta: 'Esai · Fungsi',
          title: 'Fungsi Esai',
          body: 'Esai berfungsi sebagai medium ekspresi intelektual yang menjembatani kajian akademis yang kaku dengan bacaan populer yang renyah.',
          points: [
            'Media sosialisasi gagasan kritis di surat kabar, jurnal, maupun majalah.',
            'Sarana melatih kepekaan berpikir analitis dan empati sosial.'
          ]
        },
        {
          id: 'esai-ciri',
          label: 'Ciri-ciri',
          meta: 'Esai · Ciri-ciri',
          title: 'Ciri-ciri Esai',
          body: 'Berbeda dari laporan penelitian formal, esai memiliki ciri khas gaya penuturan yang personal namun tetap bernalar.',
          points: [
            'Berbentuk prosa singkat yang dapat dibaca dalam sekali duduk.',
            'Memiliki nada pribadi (subjektif) dan gaya pembeda penulis.',
            'Tidak harus membahas topik secara menyeluruh (selektif pada sisi menarik).',
            'Mengutamakan keutuhan gagasan dan argumen.'
          ]
        },
        {
          id: 'esai-struktur',
          label: 'Struktur',
          meta: 'Esai · Struktur',
          title: 'Struktur Esai',
          body: 'Esai dibangun melalui tiga bagian utama yang mengalir secara organik dari pembuka hingga penutup.',
          points: [
            'Pendahuluan: memaparkan latar belakang fenomena dan pernyataan tesis (sudut pandang utama).',
            'Isi / Pembahasan: mengembangkan argumen melalui contoh, analogi, fakta, atau kutipan.',
            'Penutup / Simpulan: merangkum gagasan pokok dan meninggalkan kesan reflektif.'
          ]
        },
        {
          id: 'esai-jenis',
          label: 'Jenis-jenis',
          meta: 'Esai · Jenis-jenis',
          title: 'Jenis-jenis Esai',
          body: 'Esai hadir dalam berbagai ragam sesuai pendekatan dan tujuan komunikasinya.',
          points: [
            'Esai Deskriptif & Cukilan Watak: melukiskan suasana atau sosok tokoh.',
            'Esai Tajuk / Editorial: menyikapi isu aktual di media massa.',
            'Esai Pribadi & Reflektif: bertolak dari pengalaman batin penulis.',
            'Esai Kritik / Analitis: mengulas persoalan seni, sastra, atau budaya.'
          ]
        },
        {
          id: 'esai-langkah',
          label: 'Langkah-langkah',
          meta: 'Esai · Langkah Penyusunan',
          title: 'Langkah Membuat Esai',
          body: 'Esai yang memikat lahir dari kegelisahan intelektual yang diolah menjadi kerangka argumen yang jernih.',
          points: [
            'Menentukan topik spesifik yang dekat atau menarik perhatian.',
            'Merumuskan tesis (sikap/sudut pandang utama penulis).',
            'Menyusun kerangka argumen beserta ilustrasi atau fakta pendukung.',
            'Menulis dengan pilihan kata yang hidup, lalu menyunting alur logika.'
          ]
        }
      ]
    }
  ]
};

export const criticismContent: ChapterItem[] = [
  {
    id: 'ks-1',
    num: '01',
    title: 'Pengertian Kritik Sastra',
    lead: 'Kritik sastra merupakan cabang studi sastra yang berfokus pada kegiatan menganalisis, menafsirkan, dan menilai mutu sebuah karya sastra secara objektif. Istilah kritik berasal dari bahasa Yunani “kritikos” yang bermakna hakim atau pihak yang menimbang.',
    paragraphs: [
      'Dalam pembelajaran Bahasa Indonesia tingkat SMA, kritik sastra dipahami sebagai pertimbangan baik dan buruk suatu karya sastra secara objektif. Artinya, seorang kritikus tidak berhenti pada kesan suka atau tidak suka, melainkan membuktikan penilaiannya melalui pengamatan cermat terhadap unsur pembangun karya tersebut.'
    ]
  },
  {
    id: 'ks-2',
    num: '02',
    title: 'Tujuan Kritik Sastra',
    lead: 'Setiap kritik sastra ditulis untuk menyingkap nilai estetis, kedalaman makna, dan kualitas pencapaian artistik suatu karya.',
    items: [
      { label: 'Menilai Kualitas Karya secara Adil', desc: 'Menunjukkan kekuatan maupun titik lemah karya berdasarkan argumen rasional dan bukti tekstual.' },
      { label: 'Memperdalam Pemahaman Pembaca', desc: 'Membantu pembaca menangkap simbol, ironi, latar sosial, atau gagasan tersembunyi di balik teks.' },
      { label: 'Mendorong Pertumbuhan Sastra', desc: 'Menjadi dialog konstruktif agar pengarang terus mengasah teknik penceritaan, diksi, dan kepekaan tema.' }
    ]
  },
  {
    id: 'ks-3',
    num: '03',
    title: 'Fungsi Kritik Sastra',
    lead: 'Kehadiran kritik sastra menghidupkan ekosistem literasi melalui tiga peran yang saling terhubung:',
    items: [
      { label: 'Fungsi bagi Pembaca', desc: 'Menjadi kompas apresiasi agar pembaca tidak hanya menikmati alur permukaan, tetapi juga memahami mutu nilai kemanusiaan di dalamnya.' },
      { label: 'Fungsi bagi Pengarang', desc: 'Memberikan umpan balik objektif tentang keberhasilan maupun celah karya sebagai bahan evaluasi kreatif.' },
      { label: 'Fungsi bagi Perkembangan Ilmu Sastra', desc: 'Menguji teori sastra pada karya nyata sehingga melahirkan pemetaan sejarah, aliran, dan estetika sastra Indonesia.' }
    ]
  },
  {
    id: 'ks-4',
    num: '04',
    title: 'Ciri-ciri Kritik Sastra',
    lead: 'Agar dapat dibedakan dari ulasan singkat atau opini bebas, kritik sastra memiliki karakter khas berikut:',
    items: [
      { label: 'Bersifat Objektif dan Terbuka', desc: 'Penilaian didasarkan pada fakta di dalam teks sastra, bukan sentimen pribadi terhadap pengarang.' },
      { label: 'Berbasis Bukti Tekstual', desc: 'Setiap klaim keunggulan atau kelemahan disertai kutipan dialog, bait puisi, atau cuplikan adegan.' },
      { label: 'Menggunakan Bahasa Argumentatif-Lugas', desc: 'Pilihan katanya jelas, runtut, tidak bertele-tele, dan mematuhi kaidah bahasa Indonesia baku.' },
      { label: 'Memuat Pertimbangan Nilai', desc: 'Tidak hanya meringkas sinopsis, melainkan menimbang keberhasilan estetika serta relevansi tema karya.' }
    ]
  },
  {
    id: 'ks-5',
    num: '05',
    title: 'Struktur Kritik Sastra',
    lead: 'Secara umum, teks kritik sastra disusun mengikuti struktur teks eksposisi-argumentatif yang terdiri atas tiga tahap utama:',
    items: [
      { label: '1. Evaluasi (Pernyataan Pendapat / Tesis)', desc: 'Berisi pengenalan identitas karya (judul, pengarang, penerbit, tahun) disertai penilaian umum atau sudut pandang kritikus terhadap karya tersebut.' },
      { label: '2. Deskripsi Teks & Tafsiran (Rangkaian Argumen)', desc: 'Memaparkan gambaran singkat isi karya lalu menguraikan analisis unsur intrinsik (tema, alur, penokohan, latar, gaya bahasa, amanat) maupun unsur ekstrinsik dengan kutipan pendukung.' },
      { label: '3. Penegasan Ulang (Simpulan & Rekomendasi)', desc: 'Merangkum hasil penilaian—baik kelebihan maupun kekurangan—serta menyampaikan rekomendasi kepada pembaca sastra.' }
    ]
  },
  {
    id: 'ks-6',
    num: '06',
    title: 'Jenis-jenis Kritik Sastra',
    lead: 'Berdasarkan orientasi analisis yang dikemukakan oleh M.H. Abrams dan tradisi studi sastra, kritik sastra terbagi menjadi empat pendekatan utama:',
    items: [
      { label: 'Kritik Mimetik', desc: 'Menilai karya berdasarkan sejauh mana karya tersebut merefleksikan realitas sosial, budaya, dan kehidupan masyarakat.' },
      { label: 'Kritik Pragmatik', desc: 'Menilai keberhasilan karya melalui efek atau manfaat moral, emosional, dan edukatif yang dirasakan pembaca.' },
      { label: 'Kritik Ekspresif', desc: 'Menelaah karya sebagai ekspresi pengalaman batin, pandangan hidup, dan latar biografis pengarangnya.' },
      { label: 'Kritik Objektif (Struktural)', desc: 'Memandang karya sastra sebagai dunia otonom yang dinilai semata-mata dari keutuhan unsur intrinsik di dalam teks.' }
    ]
  },
  {
    id: 'ks-7',
    num: '07',
    title: 'Langkah-langkah Menyusun Kritik Sastra',
    lead: 'Untuk menghasilkan kritik sastra yang tajam dan bertanggung jawab, ikuti tahapan kerja berikut:',
    items: [
      { label: 'Langkah 1 · Pembacaan Mendalam', desc: 'Baca karya sastra secara penuh tanpa tergesa-gesa, lalu ulangi bagian-bagian kunci untuk menangkap nuansa bahasanya.' },
      { label: 'Langkah 2 · Pencatatan Identitas & Sinopsis', desc: 'Catat judul, pengarang, tahun terbit, serta rangkum garis besar cerita atau gagasan utama puisi.' },
      { label: 'Langkah 3 · Analisis Unsur & Pengumpulan Bukti', desc: 'Bedah kekuatan tokoh, konflik, latar, gaya bahasa, dan kumpulkan kutipan langsung sebagai bukti analisis.' },
      { label: 'Langkah 4 · Perumusan Penilaian Seimbang', desc: 'Susun evaluasi, tafsiran kelebihan-kekurangan, dan simpulan akhir dengan bahasa yang santun namun kritis.' }
    ]
  },
  {
    id: 'ks-8',
    num: '08',
    title: 'Contoh Kritik Sastra',
    lead: 'Berikut cuplikan penerapan struktur kritik sastra terhadap karya sastra Indonesia klasik (pembahasan lengkap tersedia pada Flipbook Kritik Sastra di bawah):',
    excerpt: {
      kicker: 'Contoh Analisis Ringkas · Cerpen Indonesia',
      title: 'Ironi Keberagamaan dalam “Robohnya Surau Kami” karya A.A. Navis',
      paragraphs: [
        'Cerpen “Robohnya Surau Kami” karya A.A. Navis merupakan salah satu karya pendek paling tajam dalam khazanah sastra Indonesia modern. Melalui tokoh Kakek Garin yang menghabiskan seluruh waktunya di surau tanpa memedulikan kewajiban sosial maupun nafkah keluarga, Navis menghadirkan kritik moral yang bernas tanpa terkesan menggurui.',
        'Kekuatan utama cerpen ini terletak pada teknik cerita berbingkai yang dibawa oleh tokoh Ajo Sidi. Kisah Haji Saleh yang rajin beribadah namun masuk neraka menjadi cermin satir yang mengguncang kesadaran pembaca. Di sisi lain, bagi pembaca masa kini yang terbiasa dengan alur cepat, dialog pembuka antara tokoh Aku dan Kakek terasa sedikit berjarak sebelum masuk ke inti sindiran Ajo Sidi. Namun secara keseluruhan, kepaduan tema, ironi, dan diksi menjadikan cerpen ini tetap relevan lintas generasi.'
      ]
    }
  }
];

export const essayContent: ChapterItem[] = [
  {
    id: 'es-1',
    num: '01',
    title: 'Pengertian Esai',
    lead: 'Esai adalah karangan prosa yang membahas suatu masalah secara sepintas lalu dari sudut pandang pribadi penulisnya. Istilah ini berakar dari kata Prancis “essai” yang berarti percobaan atau upaya menimbang suatu gagasan.',
    paragraphs: [
      'Berbeda dengan artikel ilmiah murni yang serba kaku atau kritik sastra yang terikat pada satu objek teks sastra, esai memberi ruang bagi suara personal penulis untuk menafsirkan fenomena kehidupan—mulai dari isu budaya, kebiasaan membaca, ekologi, hingga dunia digital—dengan logika yang jernih dan bahasa yang mengalir.'
    ]
  },
  {
    id: 'es-2',
    num: '02',
    title: 'Tujuan Esai',
    lead: 'Esai ditulis bukan untuk menggurui pembaca dengan rumus mutlak, melainkan untuk membuka ruang dialog intelektual:',
    items: [
      { label: 'Menyampaikan Perspektif Pribadi', desc: 'Menawarkan sudut pandang unik penulis terhadap persoalan yang mungkin sudah sering dilihat masyarakat.' },
      { label: 'Meyakinkan melalui Penalaran', desc: 'Mengajak pembaca memahami posisi penulis dengan dukungan fakta, ilustrasi, serta pengalaman empiris.' },
      { label: 'Memantik Refleksi Pembaca', desc: 'Mendorong pembaca merenungkan kembali kebiasaan atau asumsi yang selama ini dianggap wajar.' }
    ]
  },
  {
    id: 'es-3',
    num: '03',
    title: 'Fungsi Esai',
    lead: 'Dalam ruang publik dan dunia pendidikan, esai menjalankan beberapa fungsi penting:',
    items: [
      { label: 'Fungsi Kritis-Sosial', desc: 'Menjadi suara reflektif atas isu sosial, budaya, dan lingkungan secara persuasif.' },
      { label: 'Fungsi Edukatif & Literasi', desc: 'Melatih kemampuan merumuskan argumen yang terstruktur, memilih diksi efektif, dan berpikir runtut.' },
      { label: 'Fungsi Ekspresif', desc: 'Memberi wadah bagi penulis untuk mengekspresikan gaya bahasa dan kepekaan estetisnya secara bebas namun bertanggung jawab.' }
    ]
  },
  {
    id: 'es-4',
    num: '04',
    title: 'Ciri-ciri Esai',
    lead: 'Esai memiliki karakter khas yang membuatnya terasa intim sekaligus berbobot:',
    items: [
      { label: 'Berbentuk Prosa Ringkas', desc: 'Disajikan secara padat sehingga dapat dibaca tuntas dalam satu kesempatan tanpa kehilangan fokus gagasan.' },
      { label: 'Subjektif-Personal', desc: 'Menampilkan sikap, perasaan, dan cara pandang khas penulis, meskipun tetap didukung oleh data atau pengamatan nyata.' },
      { label: 'Selektif dalam Pembahasan', desc: 'Tidak berusaha membahas seluruh aspek masalah seperti buku teks; esai memilih satu sudut tajam yang paling bermakna.' },
      { label: 'Gaya Bahasa Khas & Komunikatif', desc: 'Menggunakan variasi kalimat yang hidup, metafora yang tepat guna, dan ritme bacaan yang enak diikuti.' }
    ]
  },
  {
    id: 'es-5',
    num: '05',
    title: 'Struktur Esai',
    lead: 'Keutuhan sebuah esai ditopang oleh tiga bagian utama yang saling mengunci:',
    items: [
      { label: '1. Pendahuluan (Latar Belakang & Tesis)', desc: 'Membuka tulisan dengan pengamatan menarik, pertanyaan reflektif, atau konteks isu, lalu menegaskan pernyataan tesis sebagai inti gagasan penulis.' },
      { label: '2. Isi / Pembahasan (Pengembangan Argumen)', desc: 'Menguraikan alasan-alasan yang memperkuat tesis melalui paragraf terstruktur berisi fakta, contoh konkret, perbandingan, atau kutipan ahli.' },
      { label: '3. Penutup (Simpulan & Refleksi)', desc: 'Menyimpulkan pokok pikiran tanpa mengulang kalimat secara mekanis, lalu menutup dengan gagasan pengingat yang membekas.' }
    ]
  },
  {
    id: 'es-6',
    num: '06',
    title: 'Jenis-jenis Esai',
    lead: 'Esai berkembang dalam beragam corak sesuai tujuan dan objek pengamatannya:',
    items: [
      { label: 'Esai Deskriptif', desc: 'Melukiskan suasana, tempat, atau fenomena secara rinci untuk memicu imajinasi dan kepekaan pembaca.' },
      { label: 'Esai Tajuk (Editorial)', desc: 'Mengulas isu hangat di media massa untuk menyatakan sikap atau pandangan redaksi/penulis terhadap peristiwa publik.' },
      { label: 'Esai Cukilan Watak', desc: 'Menggali sisi kepribadian atau karakter unik seorang tokoh yang memengaruhi gagasan atau zamannya.' },
      { label: 'Esai Pribadi & Reflektif', desc: 'Bertolak dari pengalaman personal penulis untuk menarik makna universal tentang kehidupan manusia.' },
      { label: 'Esai Kritik', desc: 'Membahas persoalan seni, sastra, atau kebudayaan secara analitis dengan memadukan sudut pandang pribadi.' }
    ]
  },
  {
    id: 'es-7',
    num: '07',
    title: 'Langkah-langkah Menyusun Esai',
    lead: 'Proses menulis esai yang meyakinkan dapat dilakukan melalui lima tahap praktis:',
    items: [
      { label: '1. Menentukan Topik Spesifik', desc: 'Pilih persoalan yang jelas batasannya agar pembahasan tidak melebar ke mana-mana.' },
      { label: '2. Merumuskan Tesis', desc: 'Tentukan satu gagasan sentral atau sikap yang hendak Anda pertahankan sepanjang tulisan.' },
      { label: '3. Merancang Kerangka Argumen', desc: 'Buat 2–3 poin penguat tesis lengkap dengan data, contoh keseharian, atau referensi pendukung.' },
      { label: '4. Menulis Paragraf yang Mengalir', desc: 'Bangun transisi antarpargraf secara halus, gunakan kalimat aktif, dan hindari pengulangan kata yang tidak perlu.' },
      { label: '5. Menyunting & Memoles Diksi', desc: 'Periksa kembali ketepatan ejaan, ketajaman kalimat pembuka, dan kekuatan kalimat penutup.' }
    ]
  },
  {
    id: 'es-8',
    num: '08',
    title: 'Contoh Esai',
    lead: 'Berikut cuplikan esai bertema literasi digital (versi utuh beserta analisis strukturnya dapat dibaca pada Flipbook Esai di bawah):',
    excerpt: {
      kicker: 'Contoh Esai Reflektif · Literasi Modern',
      title: 'Membaca di Tengah Arus Digital',
      paragraphs: [
        'Setiap pagi, layar ponsel kita menyuguhkan ratusan potongan informasi sebelum secangkir teh sempat mendingin. Kita merasa telah membaca banyak hal, padahal yang sering terjadi hanyalah memindai judul demi judul dalam hitungan detik. Di tengah arus notifikasi yang tak pernah tidur, kemampuan membaca secara perlahan dan mendalam menjadi kemewahan baru yang diam-diam terancam.',
        'Membaca buku atau esai panjang bukanlah tindakan melawan zaman digital, melainkan cara menjaga kejernihan nalar agar tidak terseret oleh kecepatan semata. Ketika mata kita beristirahat sejenak dari guliran layar tanpa ujung dan berpindah ke paragraf yang utuh, pikiran mendapatkan ruang untuk menimbang, meragukan, dan memahami. Barangkali, di era informasi berlimpah, kecerdasan tidak lagi diukur dari seberapa cepat kita mengakses berita, melainkan seberapa tenang kita mampu mencerna maknanya.'
      ]
    }
  }
];

export const criticismBook: FlipbookData = {
  id: 'criticismBook',
  coverTheme: 'criticism',
  coverTitle: 'Kritik Sastra',
  coverSubtitle: 'Seni Menilai Karya Sastra',
  editionLabel: 'EDISI KLASIK · KAJIAN SASTRA',
  pages: [
    {
      pageNumber: 1,
      isCover: true,
      title: 'Kritik Sastra',
      subtitle: 'Seni Menilai Karya Sastra'
    },
    {
      pageNumber: 2,
      runningHead: 'Daftar Isi',
      title: 'Daftar Isi Antologi Kritik',
      subtitle: 'Panduan Pembacaan & Analisis Karya',
      paragraphs: ['Buku ringkas ini mempraktikkan langsung teori kritik sastra pada dua karya kanonik Indonesia.'],
      bullets: [
        { label: 'Hal. 03', text: 'Pengenalan Karya yang Dikritik' },
        { label: 'Hal. 04', text: 'Kritik Cerpen “Robohnya Surau Kami” (A.A. Navis)' },
        { label: 'Hal. 05', text: 'Analisis Unsur Intrinsik Cerpen' },
        { label: 'Hal. 06', text: 'Analisis Kelebihan & Kekurangan Karya' },
        { label: 'Hal. 07', text: 'Kesimpulan Kritik Sastra' },
        { label: 'Hal. 08', text: 'Contoh Kritik Puisi “Aku” (Chairil Anwar)' }
      ]
    },
    {
      pageNumber: 3,
      runningHead: 'Pengantar Objek Kajian',
      title: 'Pengenalan Karya yang Dikritik',
      subtitle: 'Cerpen “Robohnya Surau Kami” — A.A. Navis (1955)',
      paragraphs: [
        'Identitas Karya: Pertama kali dimuat di majalah sastra Kisah tahun 1955, kemudian menjadi judul buku kumpulan cerpen A.A. Navis.',
        'Ringkasan Isi: Cerpen ini mengisahkan seorang kakek penjaga surau (garin) yang hidup menyendiri dengan mengandalkan belas kasihan warga. Suatu hari, Ajo Sidi—si pembual yang cerdik—menceritakan kisah Haji Saleh di akhirat yang justru masuk neraka karena hanya mementingkan ibadah pribadi dan melupakan tanggung jawab sosial serta negerinya.',
        'Kisah satir tersebut menghantam batin sang Kakek hingga berujung pada tragedi kematiannya di surau.'
      ]
    },
    {
      pageNumber: 4,
      runningHead: 'Praktik Kritik Cerpen',
      title: 'Kritik “Robohnya Surau Kami”',
      subtitle: 'Evaluasi Awal & Makna Satir Sosial',
      paragraphs: [
        'Karya A.A. Navis berdiri sebagai tonggak kritik sosial dalam sastra Indonesia. Alih-alih menyerang keyakinan beragama, Navis justru membela esensi spiritualitas yang seimbang antara kesalehan ritual dan tanggung jawab kemanusiaan.',
        'Melalui kalimat tajam Tuhan kepada Haji Saleh: “Apakah engkau kira Aku ini suka pujian, mabuk disembah saja?”, pengarang menelanjangi sikap egoisme spiritual yang mengabaikan kemiskinan di sekitar.',
        'Cerpen ini membuktikan bahwa fiksi pendek mampu membawa gagasan teologis dan sosial yang sangat kompleks tanpa kehilangan daya hiburnya.'
      ]
    },
    {
      pageNumber: 5,
      runningHead: 'Bedah Teks',
      title: 'Analisis Unsur Intrinsik',
      subtitle: 'Menelisik Bangunan Cerita A.A. Navis',
      bullets: [
        { label: 'Tema', text: 'Kritik terhadap kesalehan individual yang melupakan kewajiban sosial dan keluarga.' },
        { label: 'Alur', text: 'Alur campuran dengan teknik cerita dalam cerita (cerita berbingkai) melalui penuturan Ajo Sidi.' },
        { label: 'Penokohan', text: 'Kakek (pasrah, sensitif), Ajo Sidi (kritis, jenaka, penggerak konflik), Haji Saleh (simbol ironi).' },
        { label: 'Gaya Bahasa', text: 'Satir, ironis, dan dialogis sehingga pesan filosofis terasa hidup.' }
      ]
    },
    {
      pageNumber: 6,
      runningHead: 'Penilaian Seimbang',
      title: 'Kelebihan & Kekurangan Karya',
      subtitle: 'Pertimbangan Estetika & Keterbacaan',
      bullets: [
        { label: 'Kelebihan 1', text: 'Premis sangat orisinal dan berani menggugat kemunafikan sosial dengan humor gelap yang elegan.' },
        { label: 'Kelebihan 2', text: 'Akhir cerita meninggalkan ruang tafsir terbuka yang menggugah pembaca untuk berdiskusi.' },
        { label: 'Kekurangan 1', text: 'Pengenalan latar surau di awal terkesan sedikit lambat bagi pembaca muda masa kini.' },
        { label: 'Kekurangan 2', text: 'Beberapa kosakata daerah tahun 1950-an memerlukan catatan kaki agar maknanya tidak terlewat.' }
      ]
    },
    {
      pageNumber: 7,
      runningHead: 'Penegasan Ulang',
      title: 'Kesimpulan Kritik',
      subtitle: 'Relevansi Lintas Generasi',
      paragraphs: [
        'Secara keseluruhan, “Robohnya Surau Kami” adalah mahakarya prosa pendek yang berhasil memadukan kekuatan estetika bahasa dengan kedalaman pesan moral.',
        'Kekurangan minor pada tempo pembuka sama sekali tidak mengurangi bobot konfliknya. Cerpen ini sangat layak dibaca oleh pelajar, mahasiswa, dan penikmat sastra sebagai cermin tentang makna kerja, kepedulian sosial, dan keikhlasan beragama.',
        'Penilaian akhir: karya bermutu tinggi dengan daya tahan tema melampaui zamannya.'
      ]
    },
    {
      pageNumber: 8,
      runningHead: 'Praktik Kritik Puisi',
      title: 'Kritik Puisi “Aku” (Chairil Anwar)',
      subtitle: 'Vitalitas Ekspresionisme Angkatan 45',
      paragraphs: [
        'Puisi “Aku” (1943) karya Chairil Anwar menandai pergeseran radikal dari diksi mendayu Pujangga Baru menuju bahasa yang padat, berontak, dan individualistis.',
        'Larik “Aku ini binatang jalang / Dari kumpulannya terbuang” memperlihatkan keberanian metafora yang jujur akan kebebasan batin. Rima yang tidak kaku justru memperkuat ledakan emosi dan tekad “Aku mau hidup seribu tahun lagi”.',
        'Kelemahannya bagi pembaca awam ialah nada egosentris yang kerap disalahartikan sebagai kesombongan, padahal secara historis itu adalah seruan kemerdekaan jiwa di masa penjajahan.'
      ]
    }
  ]
};

export const essayBook: FlipbookData = {
  id: 'essayBook',
  coverTheme: 'essay',
  coverTitle: 'Seni Menulis Esai',
  coverSubtitle: 'Gagasan, Opini, dan Perspektif',
  editionLabel: 'SERI PERSPEKTIF · PENULISAN ESAI',
  pages: [
    {
      pageNumber: 1,
      isCover: true,
      title: 'Seni Menulis Esai',
      subtitle: 'Gagasan, Opini, dan Perspektif'
    },
    {
      pageNumber: 2,
      runningHead: 'Pengantar',
      title: 'Pengantar Seni Menulis Esai',
      subtitle: 'Mengubah Pengamatan Menjadi Gagasan',
      paragraphs: [
        'Menulis esai adalah seni bercakap-cakap dengan pembaca melalui pikiran yang tertata. Penulis esai tidak dituntut untuk menjawab semua pertanyaan di dunia; ia cukup mengajak pembaca menengok satu persoalan dari sudut yang jernih.',
        'Di dalam buku mini ini, kita menelusuri bagaimana sebuah esai dibangun dari tesis, dikembangkan menjadi argumen yang bernas, hingga diuji pada dua contoh esai tematik masa kini.'
      ]
    },
    {
      pageNumber: 3,
      runningHead: 'Kerangka Bangunan',
      title: 'Struktur Esai yang Utuh',
      subtitle: 'Tesis · Pengembangan · Simpulan',
      bullets: [
        { label: '1. Pembuka & Tesis', text: 'Mengikat perhatian lewat pengamatan konkret lalu memancangkan satu pernyataan sikap yang jelas.' },
        { label: '2. Tubuh Argumen', text: 'Setiap paragraf membawa satu gagasan penjelas yang diperkuat oleh fakta, analogi, atau pengalaman empiris.' },
        { label: '3. Penutup Reflektif', text: 'Menarik benang merah argumen tanpa terasa kaku, menyisakan gema pemikiran bagi pembaca.' }
      ]
    },
    {
      pageNumber: 4,
      runningHead: 'Contoh Esai I',
      title: 'Membaca di Tengah Arus Digital',
      subtitle: 'Esai Reflektif tentang Kebiasaan Literasi',
      paragraphs: [
        'Setiap hari jemari kita menempuh jarak puluhan meter di atas layar gawai, melompat dari satu judul berita ke cuplikan video berdurasi lima belas detik. Ironisnya, di tengah banjir teks tersebut, waktu kita untuk membaca gagasan secara utuh justru menyusut.',
        'Kebiasaan memindai informasi secara cepat melatih otak mencari sensasi instan, tetapi melemahkan daya tahan kita dalam mengikuti argumen yang kompleks. Membaca buku dan esai panjang kembali menjadi latihan kesabaran: memberi kesempatan bagi pikiran untuk duduk tenang, menguji kebenaran, dan merumuskan pendapat yang tidak tergesa-gesa.'
      ]
    },
    {
      pageNumber: 5,
      runningHead: 'Teknik Penulisan',
      title: 'Pengembangan Argumentasi',
      subtitle: 'Menjaga Logika Tetap Tajam dan Mengalir',
      paragraphs: ['Argumen dalam esai tidak boleh sekadar mengulang opini dengan kalimat berbeda. Penulis dapat memakai tiga strategi berikut:'],
      bullets: [
        { label: 'Bukti Konkret', text: 'Gunakan data kebiasaan harian atau fenomena yang mudah diverifikasi pembaca.' },
        { label: 'Kontras & Analogi', text: 'Bandingkan kecepatan gulir layar dengan ketenangan membaca buku untuk memperjelas ide abstrak.' },
        { label: 'Antisipasi Sanggahan', text: 'Akui sisi positif teknologi digital sebelum menegaskan mengapa membaca mendalam tetap tak tergantikan.' }
      ]
    },
    {
      pageNumber: 6,
      runningHead: 'Contoh Esai II',
      title: 'Kebiasaan Kecil untuk Bumi',
      subtitle: 'Esai Sosial-Lingkungan dalam Skala Harian',
      paragraphs: [
        'Krisis iklim kerap dibicarakan melalui angka emisi raksasa dan perjanjian internasional yang terasa jauh dari ruang makan kita. Akibatnya, banyak orang merasa tindakan individu terlalu kecil untuk berarti.',
        'Padahal, perubahan budaya selalu berawal dari kebiasaan sunyi di rumah: membawa botol minum sendiri, memilah sampah organik, dan menolak kemasan sekali pakai yang tak perlu. Tindakan kecil itu mungkin tidak langsung menurunkan suhu bumi besok pagi, tetapi ia membentuk kesadaran kolektif yang mengubah cara masyarakat memperlakukan alam.'
      ]
    },
    {
      pageNumber: 7,
      runningHead: 'Bedah Contoh',
      title: 'Analisis Struktur dan Isi Esai',
      subtitle: 'Memeriksa Kekuatan Dua Esai Sebelumnya',
      bullets: [
        { label: '1. Ketajaman Tesis', text: 'Pada esai pertama, tesis menegaskan bahwa membaca mendalam bukanlah sikap anti-teknologi, melainkan penyeimbang nalar.' },
        { label: '2. Kekuatan Pembuka', text: 'Esai kedua langsung mengontraskan skala krisis global dengan kebiasaan sehari-hari di ruang makan agar pembaca merasa terlibat.' },
        { label: '3. Gaya Bahasa', text: 'Keduanya menggunakan bahasa Indonesia yang baku namun luwes, menghindari istilah teknis berat sehingga pesan mudah meresap.' }
      ]
    },
    {
      pageNumber: 8,
      runningHead: 'Penutup Buku',
      title: 'Kesimpulan: Suara dalam Esai',
      subtitle: 'Merawat Keberanian Berpikir Mandiri',
      paragraphs: [
        'Esai yang berkesan tidak lahir dari hafalan kalimat rumit, melainkan dari kejujuran mengamati dunia dan kedisiplinan menyusun argumen.',
        'Saat Anda menulis esai, Anda tidak sedang menyalin pengetahuan orang lain; Anda sedang menguji gagasan Anda sendiri di hadapan pembaca. Teruslah membaca dengan kritis, mencatat kegelisahan kecil, dan merangkainya menjadi tulisan yang bermakna.'
      ]
    }
  ]
};

export const comparisonData: ComparisonItem[] = [
  {
    id: 'pengertian',
    aspect: 'Pengertian',
    criticismTitle: 'Penilaian Karya Sastra',
    criticismText: 'Tulisan analitis yang menimbang baik dan buruk suatu karya sastra secara objektif disertai alasan logis dan bukti teks.',
    essayTitle: 'Karangan Prosa Reflektif',
    essayText: 'Karangan prosa singkat yang membahas suatu masalah atau fenomena secara sepintas lalu dari sudut pandang pribadi penulisnya.',
    criticismWeight: 70
  },
  {
    id: 'tujuan',
    aspect: 'Tujuan',
    criticismTitle: 'Menilai Mutu & Membimbing Apresiasi',
    criticismText: 'Memberi pertimbangan nilai atas karya sastra agar pembaca memahami maknanya dan pengarang memperoleh umpan balik.',
    essayTitle: 'Meyakinkan & Berbagi Perspektif',
    essayText: 'Menyampaikan pandangan personal, menggugah kesadaran pembaca, serta mengajak berpikir ulang tentang suatu isu.',
    criticismWeight: 62
  },
  {
    id: 'fokus',
    aspect: 'Fokus Pembahasan',
    criticismTitle: 'Terpusat pada Karya Sastra',
    criticismText: 'Objek kajiannya spesifik berupa puisi, cerpen, novel, atau naskah drama beserta unsur pembangunnya.',
    essayTitle: 'Bebas & Lintas Fenomena',
    essayText: 'Dapat membahas sastra, budaya, pendidikan, lingkungan, teknologi, maupun pengalaman sosial sehari-hari.',
    criticismWeight: 78
  },
  {
    id: 'sifat',
    aspect: 'Sifat Tulisan',
    criticismTitle: 'Objektif dan Sistematis',
    criticismText: 'Menuntut kejujuran analitis berdasarkan data tekstual karya, tidak semata-mata selera pribadi.',
    essayTitle: 'Subjektif dan Personal',
    essayText: 'Menonjolkan suara khas, kepekaan rasa, serta gaya bertutur pribadi penulis meski tetap logis.',
    criticismWeight: 80
  },
  {
    id: 'struktur',
    aspect: 'Struktur',
    criticismTitle: 'Evaluasi · Deskripsi · Penegasan',
    criticismText: 'Dimulai dari pengenalan & penilaian awal, diikuti deskripsi sinopsis serta analisis unsur, lalu ditutup simpulan.',
    essayTitle: 'Pendahuluan · Isi · Penutup',
    essayText: 'Dimulai dari latar masalah dan tesis, dikembangkan melalui paragraf argumen, dan diakhiri simpulan reflektif.',
    criticismWeight: 55
  },
  {
    id: 'pendekatan',
    aspect: 'Pendekatan',
    criticismTitle: 'Berbasis Teori & Unsur Sastra',
    criticismText: 'Memanfaatkan pendekatan intrinsik-ekstrinsik (mimetik, pragmatik, ekspresif, atau objektif) untuk membedah karya.',
    essayTitle: 'Berbasis Penalaran & Ilustrasi',
    essayText: 'Memanfaatkan pengamatan empiris, analogi, fakta populer, dan refleksi filosofis tanpa terikat teori sastra baku.',
    criticismWeight: 72
  },
  {
    id: 'hasil',
    aspect: 'Hasil Akhir',
    criticismTitle: 'Putusan Kualitas Karya',
    criticismText: 'Menghasilkan peta kelebihan, kekurangan, serta rekomendasi nilai estetis suatu karya sastra.',
    essayTitle: 'Gagasan & Wawasan Baru',
    essayText: 'Menghasilkan sudut pandang segar atau sikap intelektual penulis terhadap persoalan yang diangkat.',
    criticismWeight: 66
  }
];

export const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'Kritik Sastra',
    question: 'Apa yang dimaksud dengan kritik sastra?',
    answer: 'Kritik sastra adalah analisis, penafsiran, dan penilaian terhadap baik atau buruknya suatu karya sastra secara objektif. Penilaian tersebut tidak boleh asal-asalan, melainkan harus didukung bukti dari isi karya (seperti kutipan dialog, karakter tokoh, alur, atau diksi) serta pengetahuan sastra yang memadai.'
  },
  {
    id: 2,
    category: 'Esai',
    question: 'Apa yang dimaksud dengan esai?',
    answer: 'Esai adalah karangan prosa nonfiksi yang membahas suatu topik atau permasalahan secara ringkas dari sudut pandang pribadi penulisnya. Topik esai sangat luas—mulai dari fenomena sosial, pendidikan, budaya, hingga isu sastra—yang disajikan dengan argumen runtut dan gaya bahasa khas.'
  },
  {
    id: 3,
    category: 'Perbandingan',
    question: 'Apa perbedaan utama kritik sastra dan esai?',
    answer: 'Perbedaan utamanya terletak pada objek dan sifatnya. Kritik sastra selalu berfokus menilai sebuah karya sastra (novel, cerpen, puisi, drama) secara objektif beserta kelebihan dan kekurangannya. Sementara itu, esai membahas gagasan atau fenomena umum dari sudut pandang subjektif-reflektif penulisnya tanpa wajib membedah suatu karya sastra.'
  },
  {
    id: 4,
    category: 'Kritik Sastra',
    question: 'Apa tujuan dibuatnya kritik sastra?',
    answer: 'Kritik sastra bertujuan membantu pembaca memahami nilai estetika dan makna mendalam di balik karya sastra, memberikan umpan balik yang adil bagi pengarang untuk mengembangkan kualitas karyanya, serta memperkaya perkembangan sejarah dan teori kesusastraan.'
  },
  {
    id: 5,
    category: 'Kritik Sastra',
    question: 'Apa saja struktur kritik sastra?',
    answer: 'Struktur kritik sastra terdiri atas tiga bagian utama: (1) Evaluasi atau pernyataan pendapat awal mengenai identitas dan mutu karya; (2) Deskripsi teks dan tafsiran yang memuat ringkasan karya serta analisis unsur intrinsik maupun ekstrinsik lengkap dengan bukti kutipan; dan (3) Penegasan ulang atau kesimpulan penilaian.'
  },
  {
    id: 6,
    category: 'Esai',
    question: 'Apa saja struktur esai?',
    answer: 'Esai tersusun dari tiga bagian: (1) Pendahuluan, yang memperkenalkan konteks masalah serta pernyataan tesis (gagasan utama penulis); (2) Isi atau pembahasan, yang mengembangkan tesis melalui argumen, fakta, dan ilustrasi; serta (3) Penutup, yang merangkum inti pemikiran secara reflektif.'
  },
  {
    id: 7,
    category: 'Kritik Sastra',
    question: 'Apakah kritik sastra harus selalu membahas kekurangan karya?',
    answer: 'Tidak harus selalu berpusat pada kekurangan. Kritik sastra yang sehat dan objektif justru menimbang kekuatan maupun keterbatasan karya secara proporsional. Jika sebuah karya sangat kuat dari sisi penokohan dan gaya bahasa, kritik sastra mengungkap keunggulan itu secara terperinci, sambil mencatat celah perbaikan secara santun jika memang ada.'
  },
  {
    id: 8,
    category: 'Esai',
    question: 'Apakah esai harus menggunakan bahasa formal?',
    answer: 'Esai umumnya menggunakan bahasa baku yang efektif agar argumen mudah dipahami secara luas, namun nadanya tidak sekaku laporan penelitian ilmiah. Penulis esai bebas memilih gaya bahasa yang lebih cair, personal, dan ekspresif selama tetap komunikatif, logis, dan sesuai konteks pembaca.'
  },
  {
    id: 9,
    category: 'Penulisan',
    question: 'Bagaimana cara membuat kritik sastra yang baik?',
    answer: 'Mulailah dengan membaca karya sastra secara utuh dan berulang. Catat identitas karya, analisis unsur pembangunnya (alur, tokoh, latar, tema, gaya bahasa), lalu kumpulkan kutipan langsung sebagai bukti. Susun tulisan dengan memaparkan keunggulan dan kekurangan secara adil, objektif, serta menggunakan bahasa yang santun dan argumentatif.'
  },
  {
    id: 10,
    category: 'Penulisan',
    question: 'Bagaimana cara membuat esai yang menarik?',
    answer: 'Pilih topik spesifik yang dekat dengan pengamatan nyata, lalu rumuskan satu tesis yang tajam dan tidak klise. Buka esai dengan pengamatan konkret atau pertanyaan yang memancing rasa ingin tahu, perkuat isi dengan contoh serta analogi yang segar, dan tutup dengan kalimat reflektif yang membekas di benak pembaca.'
  }
];
