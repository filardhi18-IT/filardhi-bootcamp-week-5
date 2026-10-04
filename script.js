// Data 6 Fitur Website
const featuresData = [
    {
        tag: "Fitur 01",
        title: "Koneksi Real-time Instant",
        description: "Menghubungkan pengguna secara instan melalui komunikasi suara, teks, dan video berkualitas tinggi tanpa latensi. Fitur ini dirancang agar interaksi terasa dekat dan alami.",
        bullets: [
            "Panggilan audio & video jernih berlatensi ultra-rendah.",
            "Indikator status kehadiran dan ketersediaan langsung.",
            "Fitur balasan cepat dan obrolan grup yang responsif."
        ]
    },
    {
        tag: "Fitur 02",
        title: "Komunitas Berbasis Minat",
        description: "Ruang kolaborasi khusus di mana pengguna dapat bergabung dengan kelompok yang membagi ketertarikan, proyek, atau keahlian serupa secara inklusif.",
        bullets: [
            "Ruang diskusi publik dan privat yang terorganisir.",
            "Moderasi komunitas pintar berbasis etika.",
            "Penyelenggaraan acara daring dan luring secara terstruktur."
        ]
    },
    {
        tag: "Fitur 03",
        title: "Keamanan & Enkripsi Terjamin",
        description: "Infrastruktur keamanan berlapis dengan enkripsi end-to-end untuk memastikan privasi data dan percakapan pengguna tetap terlindungi sepenuhnya.",
        bullets: [
            "Enkripsi data mutakhir di setiap transmisi.",
            "Autentikasi dua langkah (2FA) yang mudah dan aman.",
            "Kontrol penuh atas data pribadi dan riwayat aktivitas."
        ]
    },
    {
        tag: "Fitur 04",
        title: "Integrasi AI Pintar",
        description: "Teknologi kecerdasan buatan terpadu yang membantu meringkas diskusi, merekomendasikan jejaring relevan, dan mempermudah pencarian informasi.",
        bullets: [
            "Asisten AI untuk merekap poin penting dalam percakapan.",
            "Rekomendasi teman dan komunitas berdasarkan minat.",
            "Fitur penerjemah otomatis multi-bahasa secara real-time."
        ]
    },
    {
        tag: "Fitur 05",
        title: "Berbagi Ruang Kerja & Ide",
        description: "Papan kerja interaktif bersama (shared workspace) untuk berkolaborasi mencetuskan ide, membuat dokumen, dan menyelesaikan proyek kelompok.",
        bullets: [
            "Papan tulis digital (whiteboard) interaktif bersama.",
            "Berbagi berkas dan media tanpa batasan format.",
            "Manajemen tugas bersama dengan pelacak progres visual."
        ]
    },
    {
        tag: "Fitur 06",
        title: "Aksesibilitas Universal",
        description: "Desain antarmuka yang ramah pengguna, mendukung mode pembaca layar, kontras tinggi, serta navigasi keyboard untuk pengguna dari berbagai latar belakang.",
        bullets: [
            "Antarmuka kontras tinggi (Hitam & Putih) yang nyaman di mata.",
            "Dukungan navigasi keyboard penuh.",
            "Pengaturan ukuran teks dan bantuan suara terintegrasi."
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".feature-btn");
    const detailTag = document.getElementById("detail-tag");
    const detailTitle = document.getElementById("detail-title");
    const detailDescription = document.getElementById("detail-description");
    const detailBullets = document.getElementById("detail-bullets");
    const detailCard = document.getElementById("feature-detail-card");

    function updateFeatureDetail(index) {
        const feature = featuresData[index];
        if (!feature) return;

        // Animate detail card transition
        detailCard.style.opacity = "0.5";
        
        setTimeout(() => {
            detailTag.textContent = feature.tag;
            detailTitle.textContent = feature.title;
            detailDescription.textContent = feature.description;
            
            // Clear and render new bullets
            detailBullets.innerHTML = "";
            feature.bullets.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                detailBullets.appendChild(li);
            });

            detailCard.style.opacity = "1";
        }, 150);
    }

    // Event listener for each button
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // Remove active class from all buttons
            buttons.forEach(b => b.classList.remove("active"));
            
            // Add active class to clicked button
            btn.classList.add("active");

            // Update feature display
            updateFeatureDetail(index);
        });
    });
});
