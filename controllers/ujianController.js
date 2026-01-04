
// Ujian Controller
app.controller('ujianController', function($scope, $interval, $location) {
    $scope.soalBiasa =[
    {
      "id": "MANAJERIAL-1",
      "soal": "Anda diminta atasan untuk membuat laporan bulanan, tetapi Anda tidak tahu caranya. Apa yang Anda lakukan?",
      "jawaban_A": "Mengarang cerita agar terlihat meyakinkan.",
      "jawaban_B": "Menggunakan laporan bulan lalu, ubah tanggalnya saja.",
      "jawaban_C": "Mencari template laporan di internet.",
      "jawaban_D": "Meminta rekan kerja untuk mengerjakan semuanya.",
      "jawaban_E": "Bertanya kepada atasan dengan sopan untuk petunjuk.",
      "jawaban_benar": "E"
    },
    {
      "id": "MANAJERIAL-2",
      "soal": "Seorang bawahan terlambat masuk kerja, dan alasannya karena kucingnya sedang murung. Apa yang Anda lakukan?",
      "jawaban_A": "Mengusulkan konseling untuk kucingnya.",
      "jawaban_B": "Menyuruhnya tetap bekerja sambil menenangkan kucingnya lewat telepon.",
      "jawaban_C": "Memberikan peringatan keras.",
      "jawaban_D": "Meminta bukti berupa foto kucing yang murung.",
      "jawaban_E": "Membahas ulang kebijakan waktu masuk kerja dengan tim.",
      "jawaban_benar": "E"
    },
    {
      "id": "MANAJERIAL-3",
      "soal": "Tim Anda mengeluh tentang banyaknya rapat yang tidak produktif. Apa langkah Anda?",
      "jawaban_A": "Mengurangi rapat dan menggantinya dengan karaoke bersama.",
      "jawaban_B": "Mengatur rapat di kantin agar suasana lebih santai.",
      "jawaban_C": "Membuat agenda rapat yang jelas dan tegas.",
      "jawaban_D": "Meminta semua orang membawa cemilan agar tidak bosan.",
      "jawaban_E": "Menghapus rapat sama sekali, karena tidak penting.",
      "jawaban_benar": "C"
    },
    {
      "id": "MANAJERIAL-4",
      "soal": "Ada konflik kecil antara dua anggota tim. Bagaimana cara Anda menanganinya?",
      "jawaban_A": "Menyuruh mereka menyelesaikannya dengan adu panco.",
      "jawaban_B": "Mengabaikannya, berharap konflik hilang sendiri.",
      "jawaban_C": "Mengundang mereka ke ruang rapat untuk diskusi terbuka.",
      "jawaban_D": "Memindahkan salah satu dari mereka ke tim lain.",
      "jawaban_E": "Membawa mereka ke warung kopi untuk ngobrol santai.",
      "jawaban_benar": "C"
    },
    {
      "id": "MANAJERIAL-5",
      "soal": "Atasan Anda memberikan tugas mendadak saat Anda sedang cuti. Apa yang Anda lakukan?",
      "jawaban_A": "Menolak dengan alasan cuti adalah hak asasi.",
      "jawaban_B": "Mengalihkan tugas tersebut ke rekan kerja tanpa izin.",
      "jawaban_C": "Menunda tugas hingga cuti selesai.",
      "jawaban_D": "Segera menyelesaikan tugas di sela waktu cuti.",
      "jawaban_E": "Mengklarifikasi urgensi tugas kepada atasan dan negosiasi waktu.",
      "jawaban_benar": "E"
    },
    {
      "id": "MANAJERIAL-6",
      "soal": "Anda mendapatkan laporan bahwa salah satu anggota tim tidur di jam kerja. Apa yang Anda lakukan?",
      "jawaban_A": "Membelikan kopi dan berkata, 'Semangat!'",
      "jawaban_B": "Menganggap itu bagian dari budaya kerja fleksibel.",
      "jawaban_C": "Memberikan teguran dan mencari tahu alasannya.",
      "jawaban_D": "Membawa alarm jam dinding ke mejanya.",
      "jawaban_E": "Meminta anggota tim lain untuk membangunkannya.",
      "jawaban_benar": "C"
    },
    {
      "id": "MANAJERIAL-7",
      "soal": "Ada proyek penting, tetapi tim Anda kekurangan anggota. Apa yang Anda lakukan?",
      "jawaban_A": "Menyuruh semua orang lembur tanpa tambahan insentif.",
      "jawaban_B": "Merekrut anggota keluarga Anda sebagai tenaga tambahan.",
      "jawaban_C": "Memprioritaskan tugas berdasarkan urgensi.",
      "jawaban_D": "Menyelesaikan semuanya sendiri agar lebih cepat.",
      "jawaban_E": "Mengalihkan proyek ke tim lain.",
      "jawaban_benar": "C"
    },
    {
      "id": "MANAJERIAL-8",
      "soal": "Anda lupa password komputer kantor. Apa yang Anda lakukan?",
      "jawaban_A": "Menyalahkan bawahan atas kejadian ini.",
      "jawaban_B": "Menggunakan komputer rekan kerja tanpa izin.",
      "jawaban_C": "Menghubungi IT support untuk reset password.",
      "jawaban_D": "Mencoba menebak password hingga berhasil.",
      "jawaban_E": "Membeli komputer baru.",
      "jawaban_benar": "C"
    },
    {
      "id": "MANAJERIAL-9",
      "soal": "Rekan kerja Anda memakan bekal Anda di pantry. Apa yang Anda lakukan?",
      "jawaban_A": "Memakan bekalnya sebagai balasan.",
      "jawaban_B": "Membuat laporan resmi ke HRD.",
      "jawaban_C": "Membawa bekal lebih banyak untuk berbagi.",
      "jawaban_D": "Mengkonfrontasinya dengan sopan.",
      "jawaban_E": "Mengunci bekal Anda di brankas.",
      "jawaban_benar": "D"
    },
    {
      "id": "MANAJERIAL-10",
      "soal": "Anggota tim Anda memberikan ide yang sangat buruk dalam rapat. Apa reaksi Anda?",
      "jawaban_A": "Berteriak, 'Ide ini luar biasa buruk!'",
      "jawaban_B": "Diam saja dan berharap orang lain berkomentar.",
      "jawaban_C": "Mengapresiasi keberaniannya menyampaikan ide.",
      "jawaban_D": "Langsung mengganti topik pembicaraan.",
      "jawaban_E": "Menyuruhnya keluar dari rapat.",
      "jawaban_benar": "C"
    },
    {
        "id": "SOSIOKULTURAL-1",
        "soal": "Anda bekerja dengan rekan dari budaya yang berbeda dan sering kali terjadi kesalahpahaman. Apa yang Anda lakukan?",
        "jawaban_A": "Menghindari komunikasi langsung dengan rekan tersebut.",
        "jawaban_B": "Mencari tahu tentang budayanya dan menyesuaikan komunikasi.",
        "jawaban_C": "Meminta atasan untuk mengganti rekan kerja.",
        "jawaban_D": "Berbicara hanya melalui email untuk mengurangi konflik.",
        "jawaban_E": "Mengabaikan perbedaan dan tetap berkomunikasi seperti biasa.",
        "jawaban_benar": "B"
      },
      {
        "id": "SOSIOKULTURAL-2",
        "soal": "Rekan kerja Anda berbicara dalam bahasa daerah yang tidak Anda mengerti. Apa tindakan Anda?",
        "jawaban_A": "Meminta mereka berbicara dalam bahasa yang Anda pahami.",
        "jawaban_B": "Bergabung dan ikut berbicara meskipun tidak mengerti.",
        "jawaban_C": "Merasa tersinggung dan melapor ke HRD.",
        "jawaban_D": "Berusaha mempelajari sedikit bahasa tersebut.",
        "jawaban_E": "Menghindari percakapan dengan mereka sepenuhnya.",
        "jawaban_benar": "A"
      },
      {
        "id": "SOSIOKULTURAL-3",
        "soal": "Seorang kolega mengundang Anda untuk menghadiri acara adat di desanya. Apa yang Anda lakukan?",
        "jawaban_A": "Menolak dengan alasan sibuk.",
        "jawaban_B": "Menghadiri acara dan mencari tahu maknanya.",
        "jawaban_C": "Menghadiri acara tapi hanya untuk makan.",
        "jawaban_D": "Meminta undangan tertulis terlebih dahulu.",
        "jawaban_E": "Menghindari acara tersebut tanpa alasan.",
        "jawaban_benar": "B"
      },
      {
        "id": "SOSIOKULTURAL-4",
        "soal": "Anda sedang memimpin rapat dengan tim multikultural. Bagaimana cara Anda memulai rapat?",
        "jawaban_A": "Langsung masuk ke pembahasan inti.",
        "jawaban_B": "Memperkenalkan diri dan anggota tim secara bergiliran.",
        "jawaban_C": "Menceritakan lelucon lokal yang tidak semua orang mengerti.",
        "jawaban_D": "Meminta semua orang diam sebelum Anda berbicara.",
        "jawaban_E": "Mengabaikan perbedaan budaya dan memulai seperti biasa.",
        "jawaban_benar": "B"
      },
      {
        "id": "SOSIOKULTURAL-5",
        "soal": "Seorang bawahan Anda berasal dari latar belakang budaya yang menghormati senioritas. Bagaimana Anda memotivasi dia?",
        "jawaban_A": "Memberikan tugas dan memastikan dia tahu Anda adalah atasannya.",
        "jawaban_B": "Memuji kinerjanya di depan umum.",
        "jawaban_C": "Memberikan bonus tanpa memberi tahu alasannya.",
        "jawaban_D": "Menggunakan pendekatan yang menghormati budaya senioritasnya.",
        "jawaban_E": "Mengabaikan budaya tersebut dan memperlakukannya seperti biasa.",
        "jawaban_benar": "D"
      },
      {
        "id": "SOSIOKULTURAL-6",
        "soal": "Anda berada di acara resmi yang melibatkan tokoh-tokoh adat. Apa tindakan Anda?",
        "jawaban_A": "Meminta tokoh adat untuk mempercepat acara.",
        "jawaban_B": "Menghormati adat yang berlaku dan mengikuti acara dengan khidmat.",
        "jawaban_C": "Mengambil foto tanpa izin untuk diposting di media sosial.",
        "jawaban_D": "Berbicara dengan suara keras saat acara berlangsung.",
        "jawaban_E": "Mengabaikan aturan adat dan berperilaku seperti biasa.",
        "jawaban_benar": "B"
      },
      {
        "id": "SOSIOKULTURAL-7",
        "soal": "Dalam diskusi, seorang rekan kerja dari budaya lain jarang memberikan pendapat. Apa yang sebaiknya Anda lakukan?",
        "jawaban_A": "Menyuruhnya untuk bicara lebih banyak.",
        "jawaban_B": "Memberinya waktu untuk berbicara tanpa mendesaknya.",
        "jawaban_C": "Menganggap dia tidak memiliki kontribusi.",
        "jawaban_D": "Meminta orang lain untuk berbicara atas namanya.",
        "jawaban_E": "Mengabaikan pendapatnya karena tidak aktif.",
        "jawaban_benar": "B"
      },
      {
        "id": "SOSIOKULTURAL-8",
        "soal": "Anda diberi makanan khas daerah saat kunjungan kerja, tapi Anda tidak suka makanannya. Apa yang Anda lakukan?",
        "jawaban_A": "Menolak secara langsung dengan ekspresi tidak suka.",
        "jawaban_B": "Menerima dengan sopan dan mencicipinya sedikit.",
        "jawaban_C": "Memberikan makanan tersebut kepada orang lain di depan tuan rumah.",
        "jawaban_D": "Mengkritik rasa makanan tersebut dengan jujur.",
        "jawaban_E": "Menghindari makan sama sekali.",
        "jawaban_benar": "B"
      },
      {
        "id": "SOSIOKULTURAL-9",
        "soal": "Rekan Anda mengundang Anda ke upacara keagamaan yang berbeda dari keyakinan Anda. Apa yang Anda lakukan?",
        "jawaban_A": "Menolak dengan alasan perbedaan keyakinan.",
        "jawaban_B": "Menghadiri acara tersebut sebagai bentuk penghormatan.",
        "jawaban_C": "Datang hanya untuk dokumentasi di media sosial.",
        "jawaban_D": "Mengabaikan undangan tersebut tanpa penjelasan.",
        "jawaban_E": "Membahas keyakinan Anda secara panjang lebar saat acara.",
        "jawaban_benar": "B"
      },
      {
        "id": "SOSIOKULTURAL-10",
        "soal": "Rekan kerja Anda memperkenalkan kebiasaan baru yang tidak biasa di lingkungan kantor. Apa yang Anda lakukan?",
        "jawaban_A": "Menolak kebiasaan baru karena tidak relevan.",
        "jawaban_B": "Mencoba memahami manfaat kebiasaan tersebut.",
        "jawaban_C": "Langsung mempraktikkannya tanpa berpikir.",
        "jawaban_D": "Mengabaikan kebiasaan baru tersebut sepenuhnya.",
        "jawaban_E": "Melaporkannya ke HRD sebagai pelanggaran.",
        "jawaban_benar": "B"
      },
        {
          "id": "TEKNIS-1",
          "soal": "Anda diminta untuk memantau antrian layanan di kantor. Apa langkah pertama yang Anda lakukan?",
          "jawaban_A": "Menggunakan intuisi untuk menentukan prioritas antrian.",
          "jawaban_B": "Memeriksa sistem antrian elektronik jika tersedia.",
          "jawaban_C": "Mencatat antrian secara manual di kertas.",
          "jawaban_D": "Menyuruh semua pelanggan datang kembali keesokan hari.",
          "jawaban_E": "Menunda tugas hingga ada waktu luang.",
          "jawaban_benar": "B"
        },
        {
          "id": "TEKNIS-2",
          "soal": "Saat layanan sedang ramai, ada pelanggan yang mengeluh tentang waktu tunggu. Apa tindakan Anda?",
          "jawaban_A": "Mengabaikan keluhan pelanggan.",
          "jawaban_B": "Meminta pelanggan untuk lebih bersabar.",
          "jawaban_C": "Menjelaskan dengan sopan estimasi waktu tunggu.",
          "jawaban_D": "Menyuruh pelanggan mengambil nomor antrian baru.",
          "jawaban_E": "Menyarankan pelanggan untuk datang di hari lain.",
          "jawaban_benar": "C"
        },
        {
          "id": "TEKNIS-3",
          "soal": "Sistem layanan mengalami gangguan teknis. Apa langkah terbaik yang dilakukan?",
          "jawaban_A": "Memberitahu pelanggan bahwa layanan ditunda tanpa penjelasan.",
          "jawaban_B": "Menghubungi tim IT untuk segera memperbaiki masalah.",
          "jawaban_C": "Mencoba memperbaiki sistem sendiri meskipun tidak tahu caranya.",
          "jawaban_D": "Menghentikan semua layanan hingga sistem kembali normal.",
          "jawaban_E": "Menyarankan pelanggan untuk mencari layanan di kantor lain.",
          "jawaban_benar": "B"
        },
        {
          "id": "TEKNIS-4",
          "soal": "Bagaimana cara memastikan data pelanggan yang diinput ke sistem sudah benar?",
          "jawaban_A": "Menyuruh pelanggan memeriksa sendiri datanya.",
          "jawaban_B": "Menginput data seadanya tanpa verifikasi.",
          "jawaban_C": "Melakukan pengecekan ulang data sebelum disimpan.",
          "jawaban_D": "Mengabaikan kesalahan kecil karena tidak signifikan.",
          "jawaban_E": "Menyimpan data terlebih dahulu, baru diperbaiki nanti.",
          "jawaban_benar": "C"
        },
        {
          "id": "TEKNIS-5",
          "soal": "Apa yang Anda lakukan jika pelanggan meminta layanan yang tidak sesuai prosedur?",
          "jawaban_A": "Memberikan layanan untuk menghindari konflik.",
          "jawaban_B": "Menjelaskan dengan sopan prosedur yang benar.",
          "jawaban_C": "Menyuruh pelanggan membaca peraturan sendiri.",
          "jawaban_D": "Menyarankan pelanggan melaporkan langsung ke atasan.",
          "jawaban_E": "Mengabaikan pelanggan yang tidak mengikuti prosedur.",
          "jawaban_benar": "B"
        },
        {
          "id": "TEKNIS-6",
          "soal": "Bagaimana cara Anda menangani dokumen pelanggan yang rusak atau tidak lengkap?",
          "jawaban_A": "Memproses dokumen apa adanya.",
          "jawaban_B": "Meminta pelanggan melengkapi dokumen yang diperlukan.",
          "jawaban_C": "Menolak layanan tanpa memberikan solusi.",
          "jawaban_D": "Mengambil dokumen pelanggan lain sebagai pengganti.",
          "jawaban_E": "Menyimpan dokumen tersebut tanpa memberitahu pelanggan.",
          "jawaban_benar": "B"
        },
        {
          "id": "TEKNIS-7",
          "soal": "Jika ada pelanggan yang merasa bingung dengan formulir yang harus diisi, apa yang Anda lakukan?",
          "jawaban_A": "Menyuruh pelanggan untuk mencari tahu sendiri.",
          "jawaban_B": "Menjelaskan pengisian formulir dengan jelas dan sabar.",
          "jawaban_C": "Membiarkan pelanggan mengisi formulir tanpa panduan.",
          "jawaban_D": "Mengisi formulir tersebut untuk pelanggan tanpa persetujuan.",
          "jawaban_E": "Mengabaikan pelanggan dan fokus ke antrian berikutnya.",
          "jawaban_benar": "B"
        },
        {
          "id": "TEKNIS-8",
          "soal": "Ketika Anda menemukan kesalahan pada sistem, apa yang sebaiknya dilakukan?",
          "jawaban_A": "Mengabaikan kesalahan karena tidak mempengaruhi pekerjaan.",
          "jawaban_B": "Melaporkan kesalahan kepada tim terkait.",
          "jawaban_C": "Mencoba memperbaiki sendiri tanpa melibatkan tim IT.",
          "jawaban_D": "Menyuruh pelanggan untuk menunggu tanpa penjelasan.",
          "jawaban_E": "Menggunakan sistem meskipun ada kesalahan.",
          "jawaban_benar": "B"
        },
        {
          "id": "TEKNIS-9",
          "soal": "Apa yang harus dilakukan jika jumlah pelanggan di kantor meningkat drastis?",
          "jawaban_A": "Membatasi jumlah pelanggan yang dapat dilayani.",
          "jawaban_B": "Mengatur ulang prioritas layanan dan sumber daya.",
          "jawaban_C": "Membiarkan pelanggan menunggu tanpa tindakan.",
          "jawaban_D": "Meminta pelanggan untuk datang di lain waktu.",
          "jawaban_E": "Menambah jumlah antrian tanpa mempercepat layanan.",
          "jawaban_benar": "B"
        },
        {
          "id": "TEKNIS-10",
          "soal": "Sebelum menutup layanan pada akhir hari, apa yang harus Anda lakukan?",
          "jawaban_A": "Langsung mematikan komputer tanpa backup data.",
          "jawaban_B": "Memastikan semua data dan dokumen sudah aman disimpan.",
          "jawaban_C": "Membiarkan komputer menyala hingga keesokan harinya.",
          "jawaban_D": "Mengabaikan semua prosedur penutupan layanan.",
          "jawaban_E": "Menyerahkan semuanya kepada rekan kerja yang lain.",
          "jawaban_benar": "B"
        },
        
            
    ];

    $scope.soalWawancara = [
    {
            "id": "INTEGRITAS-1",
            "soal": "Anda menemukan rekan kerja yang meninggalkan kantor lebih awal tanpa izin. Apa yang akan Anda lakukan?",
            "jawaban_A": "Mengabaikan karena itu bukan urusan Anda.",
            "jawaban_B": "Melaporkannya langsung ke atasan tanpa bicara terlebih dahulu.",
            "jawaban_C": "Menanyakan alasan kepada rekan kerja tersebut dengan sopan.",
            "jawaban_D": "Menyebarkan isu tersebut ke rekan kerja lainnya.",
            "jawaban_E": "Mengikuti tindakan tersebut karena dianggap lumrah.",
            "jawaban_benar": "C"
          },
          {
            "id": "INTEGRITAS-2",
            "soal": "Apa yang Anda lakukan jika diminta memanipulasi data laporan oleh atasan?",
            "jawaban_A": "Menuruti permintaan karena takut konsekuensinya.",
            "jawaban_B": "Menolak dengan sopan dan menjelaskan alasan penolakan.",
            "jawaban_C": "Mengubah data dan berharap tidak ketahuan.",
            "jawaban_D": "Melaporkan langsung ke pihak berwenang.",
            "jawaban_E": "Bersikap diam dan tidak menindaklanjuti permintaan tersebut.",
            "jawaban_benar": "B"
          },
          {
            "id": "INTEGRITAS-3",
            "soal": "Anda diberi hadiah oleh rekan kerja sebagai ucapan terima kasih. Apa yang Anda lakukan?",
            "jawaban_A": "Menerima hadiah tanpa mempertimbangkan peraturan.",
            "jawaban_B": "Menerima hadiah jika nilainya kecil.",
            "jawaban_C": "Menolak hadiah dengan sopan sesuai aturan yang berlaku.",
            "jawaban_D": "Menerima hadiah tapi tidak memberitahu siapa pun.",
            "jawaban_E": "Memberikan hadiah balik untuk menjaga hubungan.",
            "jawaban_benar": "C"
          },
          {
            "id": "INTEGRITAS-4",
            "soal": "Apa yang Anda lakukan jika mengetahui ada praktik korupsi di lingkungan kerja Anda?",
            "jawaban_A": "Melaporkannya ke atasan atau pihak berwenang.",
            "jawaban_B": "Mengabaikan karena takut terlibat masalah.",
            "jawaban_C": "Memberitahu rekan kerja lain tanpa tindakan lebih lanjut.",
            "jawaban_D": "Mengikuti praktik tersebut demi keuntungan pribadi.",
            "jawaban_E": "Menyimpan informasi tersebut untuk keamanan diri sendiri.",
            "jawaban_benar": "A"
          },
          {
            "id": "INTEGRITAS-5",
            "soal": "Seorang rekan meminta Anda untuk menyembunyikan kesalahannya dalam pekerjaan. Apa respons Anda?",
            "jawaban_A": "Menyetujui permintaan demi menjaga hubungan baik.",
            "jawaban_B": "Menolak dengan sopan dan menyarankan untuk melaporkan kesalahan tersebut.",
            "jawaban_C": "Menyetujui tapi meminta imbalan tertentu.",
            "jawaban_D": "Mengabaikan permintaan tersebut tanpa memberikan tanggapan.",
            "jawaban_E": "Menyembunyikan kesalahan tapi memberitahu pihak lain secara diam-diam.",
            "jawaban_benar": "B"
          },
          {
            "id": "INTEGRITAS-6",
            "soal": "Bagaimana Anda memastikan bahwa semua dokumen yang Anda kerjakan sesuai dengan peraturan?",
            "jawaban_A": "Mengandalkan pengalaman tanpa memeriksa ulang peraturan.",
            "jawaban_B": "Selalu memeriksa dokumen berdasarkan pedoman yang ada.",
            "jawaban_C": "Menyerahkan tanggung jawab tersebut kepada rekan kerja.",
            "jawaban_D": "Mengabaikan peraturan selama dokumen terlihat baik.",
            "jawaban_E": "Hanya memeriksa dokumen jika diminta oleh atasan.",
            "jawaban_benar": "B"
          },
          {
            "id": "INTEGRITAS-7",
            "soal": "Anda diminta untuk mempercepat proses layanan bagi seorang teman dekat. Apa tindakan Anda?",
            "jawaban_A": "Melakukan percepatan sebagai bentuk bantuan.",
            "jawaban_B": "Menolak permintaan dan tetap mengikuti prosedur.",
            "jawaban_C": "Meminta izin atasan sebelum memutuskan.",
            "jawaban_D": "Mengabaikan permintaan tanpa memberi alasan.",
            "jawaban_E": "Mengalihkan tugas tersebut kepada rekan lain.",
            "jawaban_benar": "B"
          },
          {
            "id": "INTEGRITAS-8",
            "soal": "Jika Anda menemukan kesalahan dalam laporan yang telah disetujui atasan, apa yang Anda lakukan?",
            "jawaban_A": "Membiarkan kesalahan tersebut karena sudah disetujui.",
            "jawaban_B": "Memberitahu atasan tentang kesalahan tersebut dengan sopan.",
            "jawaban_C": "Mengoreksi kesalahan sendiri tanpa memberitahu atasan.",
            "jawaban_D": "Melaporkan kesalahan tersebut langsung ke pihak luar.",
            "jawaban_E": "Mengabaikan kesalahan karena bukan tanggung jawab Anda.",
            "jawaban_benar": "B"
          },
          {
            "id": "INTEGRITAS-9",
            "soal": "Apa tindakan Anda jika melihat rekan kerja menggunakan fasilitas kantor untuk keperluan pribadi?",
            "jawaban_A": "Membiarkannya karena itu hal sepele.",
            "jawaban_B": "Menegur dengan sopan dan mengingatkan aturan yang berlaku.",
            "jawaban_C": "Melaporkan langsung ke atasan tanpa bicara dengan rekan tersebut.",
            "jawaban_D": "Ikut menggunakan fasilitas kantor untuk keperluan pribadi.",
            "jawaban_E": "Mengambil tindakan sendiri tanpa melibatkan pihak lain.",
            "jawaban_benar": "B"
          },
          {
            "id": "INTEGRITAS-10",
            "soal": "Saat terjadi konflik kepentingan di pekerjaan, bagaimana Anda menyikapinya?",
            "jawaban_A": "Mengutamakan kepentingan pribadi karena lebih penting.",
            "jawaban_B": "Melapor kepada pihak berwenang untuk mendapatkan solusi.",
            "jawaban_C": "Mengambil keputusan sendiri tanpa mempertimbangkan peraturan.",
            "jawaban_D": "Mengabaikan konflik dan tetap bekerja seperti biasa.",
            "jawaban_E": "Menghindari pekerjaan terkait konflik tersebut.",
            "jawaban_benar": "B"
          }
    ]
    $scope.state = "ujian";
    $scope.jawabanBiasa = {}
    $scope.jawabanWawancara = {}

    var timer = function() {
        $scope.currentTimer--;
        //$scope.hitungNilai();
        if($scope.currentTimer <= 0) {
            $interval.cancel(intervalTimer);
            intervalTimer = null;
            $scope.selesaiUjian();
        }
    };

    $scope.mulaiUjian = function(jenisSoal) {
      $scope.jenisSoal = jenisSoal;
      if(jenisSoal == "biasa") {
        $scope.soal = $scope.soalBiasa;
        $scope.currentTimer = 600;
      } else if(jenisSoal == "wawancara") {
        //alert("Ujian Seleksi Kompetensi sudah selesai, sekarang Anda mengerjakan soal Wawancara. Selesaikan bagian soal ini dalam waktu yang diberikan. Hasil keseluruhan akan ditampilkan setelah Soal Wawancara selesai dikerjakan.")
        $scope.soal = $scope.soalWawancara;
        $scope.currentTimer = 120;
      }

      i = 1;
      for(soal in $scope.soal) {
        $scope.soal[soal].no = i;
        i++;
      }
      
      $scope.jawaban = {}


      

      $scope.currentSoal = 0;
      $scope.x = {
        "currentJawaban": null
      }

    


      for(i in $scope.soal) {
          if(!($scope.soal[i].no in $scope.jawaban)) {
              $scope.jawaban[$scope.soal[i].no] = {"id": $scope.soal[i].id, "jawaban": null};
          }
      }

      
      $scope.bolehSelesai = true;
      for(x in $scope.jawaban) {
      if($scope.jawaban[x].jawaban == null) {
              $scope.bolehSelesai = false;
              break
          }
      }
      intervalTimer = $interval(timer, 1000);
    }

    $scope.mulaiUjian("biasa");

    

    $scope.$watch('jawaban', function(oldVar, newVar) {
        if(oldVar != newVar) {
            $scope.bolehSelesai = true;
            for(x in $scope.jawaban) {
                if($scope.jawaban[x].jawaban == null) {
                    $scope.bolehSelesai = false;
                    break
                }
            }
        }
    }, true);


   $scope.bukaSoal = function(s) {
        $scope.currentSoal = s-1;
        $scope.x.currentJawaban = $scope.jawaban[$scope.soal[$scope.currentSoal].no].jawaban;
    }

    $scope.simpanDanLanjutkan = function() {
        $scope.jawaban[$scope.soal[$scope.currentSoal].no].jawaban = $scope.x.currentJawaban;
        $scope.currentSoal = ($scope.currentSoal + 1) % $scope.soal.length;
        $scope.x.currentJawaban = $scope.jawaban[$scope.soal[$scope.currentSoal].no].jawaban;
    }

    $scope.lewatkan = function() {
        $scope.currentSoal = ($scope.currentSoal + 1) % $scope.soal.length;
        $scope.x.currentJawaban = $scope.jawaban[$scope.soal[$scope.currentSoal].no].jawaban;
    }

    $scope.selesaiKah = function() {
        if(confirm("Apakah Anda ingin menyelesaikan ujian?")) {
            $scope.selesaiUjian();
        }
    }

    $scope.ulangi = function() {
      $interval.cancel(intervalTimer);
      intervalTimer = null;
      $location.path('/login');
    }
   

    $scope.hitungNilai = function() {
        $scope.nilai = {
            "MANAJERIAL": 0,
            "SOSIOKULTURAL": 0,
            "TEKNIS": 0,
            "INTEGRITAS": 0
        }

        for(x in $scope.soalBiasa) {
            let jenisSoal = $scope.soalBiasa[x]["id"].split("-")[0];
            let noSoal = $scope.soalBiasa[x]["no"];
            let jawaban = $scope.soalBiasa[x]["jawaban_benar"];
            if(jawaban == $scope.jawabanBiasa[noSoal].jawaban) {
                $scope.nilai[jenisSoal] += 5;
            }

        }

        for(x in $scope.soalWawancara) {
            let jenisSoal = $scope.soalWawancara[x]["id"].split("-")[0];
            let noSoal = $scope.soalWawancara[x]["no"];
            let jawaban = $scope.soalWawancara[x]["jawaban_benar"];
            if(jawaban == $scope.jawabanWawancara[noSoal].jawaban) {
                $scope.nilai[jenisSoal] += 5;
            }

        }
    }

    $scope.selesaiUjian = function() {
      if($scope.jenisSoal == "biasa") {
        $interval.cancel(intervalTimer);
        intervalTimer = null;
        $scope.jawabanBiasa = JSON.parse(JSON.stringify($scope.jawaban));
        $scope.mulaiUjian("wawancara");
      } else if ($scope.jenisSoal == "wawancara") {
        $interval.cancel(intervalTimer);
        intervalTimer = null;
        $scope.jawabanWawancara = JSON.parse(JSON.stringify($scope.jawaban));
        $scope.hitungNilai();
        $scope.state = "finish";
      }
    }

    

    
   

    var pad = function(angka, size) {
        var s = String(angka);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }

    $scope.kalkulasiWaktu = function(detik) {
        var jam = Math.floor(detik / 3600);
        var menit = Math.floor(detik / 60) % 60;
        var detik = detik - (jam*3600) - (menit * 60);

        return pad(jam,2) + ":" + pad(menit,2) + ":" + pad(detik,2);
        
    }

});