alert('Assalomu Aleykum Voenkomatga xush kelibsiz')
let first_name = prompt('Ismingiz: ')

let surname = prompt('Familiyangiz: ')

let date_of_birth = prompt('Nechanchi yilsiz: ')
date_of_birth = Number(date_of_birth)

if(2022 - date_of_birth >= 18 && 2022 - date_of_birth <= 27)
{
  alert('Siz armiyaga chaqirildingiz ertagayoq uchib keling qutulishni iloji yo\'q baxona qilsangiz uyingizdan borib olib kelamiz va sizga 100 darra uriladi')
}
else if(2022-date_of_birth>27)
{
  alert('Siz armiyaga borib kelgan bo\'lishingiz kerak endi kech tanish bilish ham yordam bermaydi eng kattasi manman')
}
else
{
  alert('Ukam xali yoshlik qilasan')
}