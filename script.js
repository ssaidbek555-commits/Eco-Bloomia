// ============ Можно изменять ============
const CONFIG = {
    teamName: 'Eco-Bloomia',
    school: '7-maktab',
    email: 'ecoteam@example.com',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/your_team', handle: '@your_team' },
      { name: 'Telegram', url: 'https://t.me/your_team', handle: '@your_team' },
      { name: 'YouTube', url: 'https://youtube.com/@your_team', handle: 'Jamoa kanali' }
    ],
    stats: [
      { n: '6', label: 'hashar' },
      { n: '240', label: 'kg makulatura' },
      { n: '15', label: 'eko-dars' },
      { n: '3', label: 'loyiha himoyasi' }
    ],
    members: [
      { name: 'Gafurov D.', role: 'Prezident', photo: 'photos/Gafur.jpg', about: 'Jamoani yigʻadi va rejani ushlab turadi. Maktabda bir martalik plastiksiz hayotni orzu qiladi.', tip: 'Oʻzing bilan qayta ishlatiladigan shisha olib yur, bu eng oddiy birinchi qadam.' },
      { name: 'Bolikulova Z.', role: 'Vice Prezident', photo: 'photos/Bolikul.jpg', about: 'Loyihalarimiz uchun oʻlchaydi, hisoblaydi va maʼlumot izlaydi.', tip: 'Tashlashdan oldin markirovkani tekshir: koʻp qadoqlarni topshirish mumkin.' },
      { name: 'Ifora', role: 'Dizayner', photo: 'photos/Ifora.jpg', about: 'Plakatlar chizadi va eko-gʻoyalarni oʻqishni xohlaydigan qilib beradi.', tip: 'Varaqning ikkala tomoniga chop et, qoralamalarni yozuvlar uchun ishlat.' },
      { name: 'Saidbek', role: 'пока что янги', photo: 'photos/Said.jpg', about: 'Hasharlarni suratga oladi va tozalashdan keyin joy qanday oʻzgarishini koʻrsatadi.', tip: '«Oldin» va «keyin» suratga ol: bu boshqalar uchun eng yaxshi dalil.' },
      { name: 'Umida Shuxratovna', role: 'Koordinator', photo: 'photos/Umida.jpg', about: 'Kichik sinflar uchun oʻyinlar va mini-maʼruzalar tayyorlaydi.', tip: 'Chiqayotganingda chiroq va suvni oʻchir. Parta doshingga ham eslat.' }
    ],
    achievements: [
      { when: '2024-yil kuzi', title: 'Maktab eko-loyihalar tanlovi', result: 'Gʻalaba', kind: 'win', text: 'Maktab koridorlari uchun chiqindilarni ajratib yigʻish loyihasini taqdim etdik.' },
      { when: '2025-yil bahori', title: 'Shahar ekologik hashari', result: '2-oʻrin', kind: 'prize', text: 'Maktab yonidagi sohilni tozaladik va 40 nafar ixtiyoriyni jalb qildik.' },
      { when: '2025-yil kuzi', title: '«Yashil maktab» tuman tanlovi', result: 'Ishtirok', kind: 'part', text: 'Eko-yoʻlak loyihasini himoya qildik va hakamlardan maslahatlar oldik.' },
      { when: '2026-yil qishi', title: 'Eko-musobaqalarning viloyat bosqichi', result: 'Tayyorlanmoqda', kind: 'soon', progress: 70, text: 'Taqdimotni yakunlayapmiz va loyiha himoyasini mashq qilyapmiz.' }
    ]
  };
  // =====================================================
 
  document.documentElement.lang = 'uz';
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n, d = 0) => n.toLocaleString('ru-RU', { maximumFractionDigits: d, minimumFractionDigits: d });
 
  // Nom va maktab
  document.title = CONFIG.teamName;
  document.querySelectorAll('[data-team]').forEach((el) => (el.textContent = CONFIG.teamName));
  document.querySelectorAll('[data-school]').forEach((el) => (el.textContent = CONFIG.school));
  $('#year').textContent = new Date().getFullYear();
  $('#mail-text').textContent = CONFIG.email;
 
  // Jamoa haqida: raqamlar
  $('#about-stats').innerHTML = CONFIG.stats.map((s, i) => `
    <div class="${i % 2 ? 'bg-sand' : 'bg-moss-soft'} rounded-3xl p-5">
      <div class="font-display font-semibold text-3xl text-moss tnum">${esc(s.n)}</div>
      <div class="text-sm text-muted mt-1">${esc(s.label)}</div>
    </div>`).join('');
 
  // Ishtirokchilar
  function lgSpan(i, n) {
    const r = n % 3;
    if (r === 0) return 'lg:col-span-2';
    if (r === 1) return i >= n - 4 ? 'lg:col-span-3' : 'lg:col-span-2';
    return i >= n - 2 ? 'lg:col-span-3' : 'lg:col-span-2';
  }
  const initials = (name) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const members = CONFIG.members;
  $('#team-grid').innerHTML = members.map((m, i) => `
    <article class="panel p-6 flex flex-col gap-4 min-w-0 ${lgSpan(i, members.length)} ${members.length % 2 && i === members.length - 1 ? 'sm:col-span-2' : ''}">
      <div class="flex items-center gap-4">
      <div class="av av${(i % 5) + 1}">${m.photo ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}">` : esc(initials(m.name))}</div>
        <div class="min-w-0">
          <h3 class="font-display font-semibold text-lg leading-tight">${esc(m.name)}</h3>
          <span class="eyebrow !tracking-wider !normal-case !text-sm">${esc(m.role)}</span>
        </div>
      </div>
      <p class="text-muted">${esc(m.about)}</p>
      <p class="bg-sand rounded-2xl px-4 py-3 text-sm mt-auto"><b class="text-moss">Eko-maslahat.</b> ${esc(m.tip)}</p>
    </article>`).join('');
 
  // Yutuqlar
  $('#ach-list').innerHTML = CONFIG.achievements.map((a) => `
    <li class="panel p-5 sm:p-6 grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 items-start">
      <div class="text-sm font-semibold text-muted pt-1">${esc(a.when)}</div>
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 class="font-display font-semibold text-lg leading-snug">${esc(a.title)}</h3>
          <span class="badge b-${a.kind}">${esc(a.result)}</span>
        </div>
        <p class="text-muted mt-1">${esc(a.text)}</p>
        ${a.progress != null ? `<div class="mt-3 max-w-md"><div class="bar" role="progressbar" aria-label="Tayyorlik" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.progress}"><span style="width:${a.progress}%"></span></div><p class="text-xs text-muted mt-1">Tayyorlik: ${a.progress}%</p></div>` : ''}
      </div>
    </li>`).join('');
 
  // Ijtimoiy tarmoqlar
  $('#social-list').innerHTML = CONFIG.socials.map((s) => `
    <li><a class="inline-flex flex-col bg-surface rounded-2xl px-4 py-2 hover:-translate-y-0.5 transition" href="${esc(s.url)}" target="_blank" rel="noopener">
      <span class="font-semibold text-sm">${esc(s.name)}</span><span class="text-xs text-muted">${esc(s.handle)}</span></a></li>`).join('');
 
  // Tablar
  const tabs = { calc: [$('#tab-calc'), $('#pane-calc')], quiz: [$('#tab-quiz'), $('#pane-quiz')] };
  Object.entries(tabs).forEach(([key, [tab]]) => {
    tab.addEventListener('click', () => {
      Object.entries(tabs).forEach(([k, [t, p]]) => {
        t.setAttribute('aria-selected', String(k === key));
        p.hidden = k !== key;
      });
    });
  });
 
  // Plastik hisoblagichi
  const W = { bottle: 20, bag: 6, cup: 8 };      // gramm plastik
  const CO2 = { bottle: 0.08, bag: 0.03, cup: 0.05 }; // kg CO2, taxminiy
  const GOAL_KG = 25;
  function calc() {
    const b = +$('#r-bottle').value, g = +$('#r-bag').value, c = +$('#r-cup').value, p = +$('#r-people').value;
    $('#o-bottle').textContent = b; $('#o-bag').textContent = g; $('#o-cup').textContent = c; $('#o-people').textContent = p;
    const k = 52 * p;
    const items = (b + g + c) * k;
    const kg = (b * W.bottle + g * W.bag + c * W.cup) * k / 1000;
    const co2 = (b * CO2.bottle + g * CO2.bag + c * CO2.cup) * k;
    const pct = Math.min(100, Math.round(kg / GOAL_KG * 100));
    $('#res-kg').textContent = fmt(kg, 1);
    $('#res-items').textContent = fmt(items);
    $('#res-co2').textContent = fmt(co2);
    $('#goal-fill').style.width = pct + '%';
    $('#goal-pct').textContent = pct;
    $('#goal-bar').setAttribute('aria-valuenow', pct);
    const meters = b * k * 0.2;
    $('#res-line').textContent = b > 0
      ? `Qatorga terilsa, bu shishalar ${fmt(meters)} m ga choʻzilardi.`
      : 'Shishalar sonini oshirib koʻr: bu eng sezilarli hissa.';
  }
  ['bottle', 'bag', 'cup', 'people'].forEach((id) => $('#r-' + id).addEventListener('input', calc));
  calc();
 
  // Mini-test
  const QUIZ = [
    { q: 'Boʻsh plastik shisha bilan nima qilasan?', a: ['Qayerga boʻlsa tashlayman', 'Axlatga tashlayman, lekin ba’zan saralayman', 'Saralayman yoki qayta ishlataman'] },
    { q: 'Doʻkonga qanday borasan?', a: ['Har safar yangi paket olaman', 'Ba’zan oʻz sumkamni olaman', 'Doim shopper yoki ryukzak bilan'] },
    { q: 'Maktabda suv bilan-chi?', a: ['Doʻkondan shisha sotib olaman', 'Ba’zan oʻzimnikini olib kelaman', 'Menda doim qayta ishlatiladigan shisha bor'] },
    { q: 'Keraksiz chiroq va suv-chi?', a: ['Oʻchirishni koʻp unutaman', 'Odatda oʻchiraman', 'Oʻchiraman va boshqalarga ham eslataman'] },
    { q: 'Hasharda necha marta qatnashgansan?', a: ['Hali bir marta ham', 'Bir-ikki marta', 'Oʻzim tashkil qilaman'] }
  ];
  const RESULTS = [
    { max: 8, title: 'Eko-nihol', text: 'Sen endigina boshlayapsan, bu ajoyib. Hafta uchun bitta odatni tanla, masalan, suv uchun oʻz shishang.' },
    { max: 12, title: 'Eko-faol', text: 'Sen allaqachon koʻp ish qilyapsan. Do‘stingni yaqin hasharga chaqir, ikkovlon ikki baravar koʻp bajarasizlar.' },
    { max: 15, title: 'Eko-qoʻriqchi', text: 'Sen sinf uchun haqiqiy namunasan. Odatlaring haqida boshqalarga gapirib ber va mini-dars oʻtkaz.' }
  ];
  let qi = 0, score = 0;
  function renderQuiz() {
    const box = $('#quiz-body');
    if (qi >= QUIZ.length) {
      const r = RESULTS.find((x) => score <= x.max);
      box.innerHTML = `
        <p class="eyebrow mb-2">Natijang: 15 balldan ${score}</p>
        <h3 class="font-display font-semibold text-2xl text-moss mb-2">${esc(r.title)}</h3>
        <p class="text-muted mb-5">${esc(r.text)}</p>
        <button type="button" class="btn btn-primary" id="quiz-restart">Qayta topshirish</button>`;
      $('#quiz-restart').addEventListener('click', () => { qi = 0; score = 0; renderQuiz(); });
      return;
    }
    const item = QUIZ[qi];
    box.innerHTML = `
      <div class="flex items-center justify-between text-sm text-muted mb-2"><span>Savol ${qi + 1} / ${QUIZ.length}</span></div>
      <div class="bar mb-5"><span style="width:${(qi / QUIZ.length) * 100}%"></span></div>
      <h3 class="font-display font-semibold text-xl leading-snug mb-4">${esc(item.q)}</h3>
      <div class="flex flex-col gap-2">${item.a.map((t, i) => `<button type="button" class="opt" data-pts="${i + 1}">${esc(t)}</button>`).join('')}</div>`;
    box.querySelectorAll('.opt').forEach((b) => b.addEventListener('click', () => { score += +b.dataset.pts; qi++; renderQuiz(); }));
  }
  renderQuiz();
 
  // Nusxalash
  async function copyText(text, fallbackEl) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      if (fallbackEl) { fallbackEl.focus(); fallbackEl.select && fallbackEl.select(); }
      return false;
    }
  }
  $('#mail-copy').addEventListener('click', async (e) => {
    const ok = await copyText(CONFIG.email);
    const btn = e.currentTarget;
    btn.textContent = ok ? 'Nusxalandi' : 'Belgilab nusxalang';
    setTimeout(() => (btn.textContent = 'Nusxalash'), 2000);
  });
 
  // Aloqa shakli
  $('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#f-name').value.trim(), contact = $('#f-contact').value.trim(), msg = $('#f-msg').value.trim();
    const err = $('#f-error');
    if (!name || !contact || !msg) {
      err.textContent = 'Biz sizga javob bera olishimiz uchun uchala maydonni toʻldiring.';
      err.hidden = false; $('#f-result').hidden = true; return;
    }
    err.hidden = true;
    $('#f-out').value = `Assalomu alaykum, ${CONFIG.teamName} jamoasi!\n\n${msg}\n\nHurmat bilan, ${name}\nAloqa: ${contact}`;
    $('#f-result').hidden = false;
    $('#f-copied').hidden = true;
  });
  $('#f-copy').addEventListener('click', async () => {
    const ok = await copyText($('#f-out').value, $('#f-out'));
    const s = $('#f-copied');
    s.textContent = ok ? 'Nusxalandi' : 'Matn belgilandi, Ctrl+C bosing';
    s.hidden = false;
  });
 