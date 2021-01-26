exports.wait = () => {
	return`⏳ Sedang Di Proses ⏳`
}

exports.succes = () => {
	return`✔️Berhasil✔️`
}

exports.lvlon = () => {
	return`*[AKTIF] LEVEL*`
}

exports.lvloff = () => {
	return`*[DISABLE] LEVEL*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = (pushname) => {
	return`*[DAFTAR]*\n*Maaf Kak ${pushname} Kamu Belum Terdaftar Sebagai Teman Froze*\n${prefix}daftar nama|12`
}

exports.rediregis = () => {
	return`*Kak Sudah Terdaftar (;*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid☹️*`
}

exports.groupo = () => {
	return`*[❗] Hanya Untuk Grup!!*`
}

exports.ownerb = () => {
	return`*[❗] Hanya Untuk Owner!!*`
}

exports.ownerg = () => {
	return`*[❗] Hanya Untuk Owner Grup!!*`
}

exports.admin = () => {
	return`*[❗] Khusus Admin Grup!!*`
}

exports.badmin = () => {
	return`*[❗] Bot Harus Jadi Admin!!!*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`teks nya mana um?`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*[❗] Om Belum Terdaftar Di DataBase*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*PENDAFTARAN BERHASIL*\n*NICK*: ${namaUser}\n*UMUR*: ${umurUser}\n*CODE*: ${serialUser}\n*PADA* ${time}\n*SELAMT MENCOBA (:*`
}

exports.cmdnf = (prefix, command) => {
	return `command *${prefix} ${command} *tidak di temukan coba tulis *#menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} kamu bukan owner ☹️*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
========================
-> *Nama* : ${pushname}
-> *Nomer* : wa.me/${sender.split("@")[0]}
-> *Uang mu* : Rp${uangku}
-> *XP* : ${getLevelingXp(sender)}/${reqXp}
-> *Level* : ${getLevelingLevel(sender)}
-> *User register* : ${_registered.length}
====🥶FROZE BOT V2🥶======
-> *${prefix}sticker*
-> *${prefix}vinta*
-> *${prefix}avengers*
-> *${prefix}summer*
-> *${prefix}sandwrite*
-> *${prefix}metaldark*
-> *${prefix}dropwater*
-> *${prefix}greenneon*
-> *${prefix}neontext*
-> *${prefix}sumery*
-> *${prefix}blood*
-> *${prefix}firework*
-> *${prefix}lava*
-> *${prefix}tahtah <text>*
-> *${prefix}nulis <nama|kelas|tinta>*
-> *${prefix}kucing*
-> *${prefix}loli*
-> *${prefix}nekonime*
-> *${prefix}randomnime*
-> *${prefix}google <query>*
-> *${prefix}thunder <teks>*
-> *${prefix}wiki <query>*
-> *${prefix}apkpure <query>*
-> *${prefix}infomobil <merk>*
-> *${prefix}infomotor <merk>*
-> *${prefix}ytmp3 <url>*
-> *${prefix}ytmp4 <url>*
========================
-> *${prefix}mining*
-> *${prefix}bisakah*
-> *${prefix}kapankah*
-> *${prefix}apakah*
-> *${prefix}rate*
-> *${prefix}slap*
-> *${prefix}tampar*
-> *${prefix}speed*
========================
-> *${prefix}toxic*
-> *${prefix}quotes*
-> *${prefix}beritahoax*
-> *${prefix}brainly*
-> *${prefix}pinterest*
-> *${prefix}resepmasakan*
-> *${prefix}igstalk*
========================
-> *${prefix}limit*
-> *${prefix}buylimit*
-> *${prefix}dompet*
========================
-> *${prefix}pokemon*
-> *${prefix}anjing*
-> *${prefix}1cak*
========================
-> *${prefix}hidetag*
-> *${prefix}grouplist*
-> *${prefix}limit*
-> *${prefix}level*
-> *${prefix}linkgc*
-> *${prefix}tagall*
-> *${prefix}setpp*
-> *${prefix}add*
-> *${prefix}kick*
-> *${prefix}setname*
-> *${prefix}setdesc*
-> *${prefix}demote*
-> *${prefix}promote*
-> *${prefix}listadmin*
-> *${prefix}group* [buka/tutup]
-> *${prefix}leveling* [enable/disable]
-> *${prefix}nsfw* [1/0]
-> *${prefix}simih* [1/0]
-> *${prefix}welcome* [1/0]
========================
->  *${prefix}bc*
->  *${prefix}bcgc*
->  *${prefix}kickall*
->  *${prefix}setreply*
->  *${prefix}setprefix*
->  *${prefix}clearall*
->  *${prefix}block*
 -> *${prefix}unblock*
 -> *${prefix}leave*
 -> *${prefix}event* [1/0]
 -> *${prefix}clone*
 -> *${prefix}setppbot*
========================

*⚠️Bot Tidak Onlie 24Jam*
*⚠️Bantu Donasi 🙂*
*⚠️ Maaf Kalo ada Bug*

*[BIG SPECIAL THAKS TOO]*
*>AFFIS JUNIANTO*
*>Mhankbarbar*
*>Arugaz*
*>ALL CREATOR BOT (:*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*SELAMAT ❤️*
*Nama* : ${pushname}
*Nomer* : wa.me/${sender.split("@")[0]}
*Xp* : ${getLevelingXp(sender)}
*Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
kamu Naik Level  🙂`
}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*⚠️LIMIT COUNTS⚠️*
sisa limit anda : ${limitCounts}

Kamu Bisa Beli Limit Atau Naik Level Untuk limit kamu bertambah!!!`
}

exports.satukos = () => {
	return`*Pilih* 1 = enable\n*Pilih 0 = disble om`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*⚠️TOTAL UANG⚠️\n>*Nama* : ${pushname}\n->*Nomer* : ${sender.split("@")[0]}\n>*Uang* : ${uangkau}\n[MADE BY FROZE BOT]`
}
