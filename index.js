/* =====================================================================
   fa-offline.js — icônes Font Awesome (version Free) 100 % hors-ligne
   Remplace le <script> du CDN : plus besoin d'Internet pour les icônes.
   Comment ça marche : chaque <i class="fa-solid fa-NOM"> est remplacé par
   le dessin SVG correspondant (tableau ICONS ci-dessous).
   Pour AJOUTER une icône : ouvre fontawesome/svgs/solid/NOM.svg (ou brands/),
   copie le viewBox et le contenu de d="..." puis ajoute une ligne dans ICONS :
       "nom-icone":["0 0 512 512","M256 0C..."],
   Licence des icônes : CC BY 4.0 (voir fontawesome/LICENSE.txt).
   ===================================================================== */
(function(){
const ICONS={"bolt":["0 0 448 512","M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224H416c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288H32c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3"],"book-open-reader":["0 0 512 512","M256 152a88 88 0 1 0 0-176 88 88 0 1 0 0 176m0 298.7V301.4c16.3-6.8 32.9-13.7 49.7-20.7 39-16.2 80.8-24.6 123.1-24.6H448v160h-19.2c-59.1 0-117.7 11.7-172.3 34.5l-.5.2zm0-218.7-25.1-10.5C184.1 202 133.9 192 83.2 192H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h35.2c50.7 0 100.9 10 147.7 29.5l12.8 5.3c7.9 3.3 16.7 3.3 24.6 0l12.8-5.3c46.8-19.5 97-29.5 147.7-29.5H464c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-35.2c-50.7 0-100.9 10-147.7 29.5z"],"bullseye":["0 0 512 512","M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-32 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0"],"chevron-left":["0 0 320 512","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"],"chevron-right":["0 0 320 512","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"],"circle-check":["0 0 512 512","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m118-366.3c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8l135.9-187c7.8-10.7 5.4-25.7-5.3-33.5"],"circle-question":["0 0 512 512","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5v3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zm-32 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0"],"download":["0 0 448 512","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v210.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7zM64 320c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64h-46.9l-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48"],"earth-africa":["0 0 512 512","M447.6 175C416 100.4 342.1 48 256 48c-22.1 0-43.4 3.5-63.4 9.8-.4 2-.6 4.1-.6 6.2v73.4c0 12.5 10.1 22.6 22.6 22.6 6 0 11.8-2.4 16-6.6l16-16c6-6 14.1-9.4 22.6-9.4h5.5c28.5 0 42.8 34.5 22.6 54.6-6 6-14.1 9.4-22.6 9.4h-61.5c-8.5 0-16.6 3.4-22.6 9.4l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6V288c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32v32c0 17.7 14.3 32 32 32h2.7c8.5 0 16.6-3.4 22.6-9.4l29.3-29.3c6-6 9.4-14.1 9.4-22.6V336c0-8.8 7.2-16 16-16s16-7.2 16-16v-34.7c0-8.5-3.4-16.6-9.4-22.6l-16-16c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6h45c12.4 0 22.7-7.1 28-17zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"],"gamepad":["0 0 640 512","M448 64c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256S86 64 192 64zM192 176c-13.3 0-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v32c0 13.3 10.7 24 24 24s24-10.7 24-24v-32h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32v-32c0-13.3-10.7-24-24-24m240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64"],"globe":["0 0 512 512","M351.9 280H161c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zm-191-48h190.9c-2.8-64.5-17.1-123.9-37.4-167.4-11.4-24.4-23.7-41.8-35.1-52.4C268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4m-48 0c3.5-85.6 25.6-165.1 57.9-217.3C78.7 47.3 10.9 131.2 1.5 232zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3zm111.4-48C501.9 131.2 434.1 47.3 342 14.7c32.3 52.2 54.4 131.7 57.9 217.3z"],"hand-holding-heart":["0 0 576 512","M279.6 31c-14.1-19.5-36.7-31-60.7-31C177.5 0 144 33.5 144 74.9v2.4c0 64.4 82 133.4 122.2 163.3 13 9.7 30.5 9.7 43.5 0 40.2-30 122.2-98.9 122.2-163.3v-2.4C431.9 33.5 398.4 0 357 0c-24 0-46.6 11.5-60.7 31L288 42.7zM109.3 341.5 66.7 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c17.7 0 32-14.3 32-32s-14.3-32-32-32H199.8c-33.9 0-66.5 13.5-90.5 37.5"],"heart":["0 0 512 512","m241 87.1 15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1v2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7v-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1"],"medal":["0 0 448 512","M224.3 128 139.7-12.9c-6.5-10.8-20.1-14.7-31.3-9.1L21.8 21.3C9.9 27.2 5.1 41.6 11 53.5l69.6 139.1C50.5 226.5 32.3 271.1 32.3 320c0 106 86 192 192 192s192-86 192-192c0-48.9-18.3-93.5-48.3-127.4l69.6-139.1c5.9-11.9 1.1-26.3-10.7-32.2l-86.7-43.4c-11.2-5.6-24.9-1.6-31.3 9.1zm30.8 142.5c1.4 2.8 4 4.7 7 5.1l50.1 7.3c7.7 1.1 10.7 10.5 5.2 16l-36.3 35.4c-2.2 2.2-3.2 5.2-2.7 8.3l8.6 49.9c1.3 7.6-6.7 13.5-13.6 9.9l-44.8-23.6c-2.7-1.4-6-1.4-8.7 0l-44.8 23.6c-6.9 3.6-14.9-2.2-13.6-9.9l8.6-49.9c.5-3-.5-6.1-2.7-8.3l-36.3-35.4c-5.6-5.4-2.5-14.8 5.2-16l50.1-7.3c3-.4 5.7-2.4 7-5.1l22.4-45.4c3.4-7 13.3-7 16.8 0l22.4 45.4z"],"moon":["0 0 512 512","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9.4-9.8.6-14.8.6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4s-8.6-18.3-18.5-20.5C294.4 2.2 275.4 0 256 0"],"paper-plane":["0 0 576 512","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9l-112.4 94.3c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8z"],"rotate":["0 0 512 512","M480.1 192h7.9c13.3 0 24-10.7 24-24V24c0-9.7-5.8-18.5-14.8-22.2S477.9.2 471 7l-51.7 51.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5c-2.5 17.5 9.6 33.7 27.1 36.2s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64c44.4 0 85.2 15 117.7 40.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320H24c-13.3 0-24 10.7-24 24v144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.6 26.2-5.2l51.8-51.8C137 489.9 194 512 256 512c129 0 235.7-95.4 253.4-219.5z"],"share-nodes":["0 0 512 512","M384 192c53 0 96-43 96-96S437 0 384 0s-96 43-96 96c0 5.4.5 10.8 1.3 16l-129.7 72.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1"],"star":["0 0 576 512","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1l-73.6 144.2-159.9 25.4c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2l144.4-73.4L432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2l-25.3-159.9 114.4-114.5c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3z"],"trophy":["0 0 512 512","M144.3 0h224c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8h49.6c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8V448h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-192c-17.7 0-32-14.3-32-32s14.3-32 32-32h64v-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1C57 273.2 8.2 216.1 1.2 113.6c-1.9-28.1 21-49.7 47.1-49.7h49.6c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zm-42.8 112H49.1c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6M380 256.8c40.5-23.8 77.1-66.1 83.3-144.8H411c-6.2 60.9-17.4 108.2-31 144.8"],"user-plus":["0 0 640 512","M136 128a120 120 0 1 1 240 0 120 120 0 1 1-240 0M48 482.3C48 383.8 127.8 304 226.3 304h59.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H77.7C61.3 512 48 498.7 48 482.3M544 96c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24"],"xmark":["0 0 384 512","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l137.3-137.4 137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7z"],"book-open":["0 0 512 512","M256 141.3v309.3l.5-.2A449 449 0 0 1 428.8 416H448V96h-19.2c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7m-25.1-79.8L256 72l25.1-10.5C327.9 42 378.1 32 428.8 32H464c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-35.2c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h35.2c50.7 0 100.9 10 147.7 29.5"],"calculator":["0 0 384 512","M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 64h192c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m16 168a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M88 352a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m80 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48M64 424c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24m232-24c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24"],"palette":["0 0 512 512","M512 256v2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48 0 3.4.4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5.1-7 .2-10.6.2-141.4 0-256-114.6-256-256S114.6 0 256 0s256 114.6 256 256m-384 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64"],"leaf":["0 0 512 512","M471.3 6.7c6.4-6.1 15.7-8.3 24.3-5.5C505.4 4.5 512 13.7 512 24v186.9C512 342.1 403.9 448 273.2 448c-77 0-143.4-49.5-167.5-118.7C70.3 360.1 48 405.4 48 456c0 13.3-10.7 24-24 24S0 469.3 0 456c0-74.9 38.2-140.9 96.1-179.7C131.4 252.7 173.5 240 216 240h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-39.7 0-77.3 8.8-111 24.5C128.3 146.5 194.2 96 272 96c66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z"],"futbol":["0 0 512 512","m417.3 360.1-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6c-15.7 4.2-32.2 6.4-49.2 6.4s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6l60.7-38.2c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15L107 134.8c21-25.6 48.3-45.8 79.7-57.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"],"landmark":["0 0 512 512","M238.7 5.1c10.5-6.8 24.1-6.8 34.6 0l224 144c11.9 7.7 17.4 22.3 13.4 35.9s-16.5 23-30.7 23h-32v208l51.2 38.4c8.1 6 12.8 15.5 12.8 25.6 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32 0-10.1 4.7-19.6 12.8-25.6L64 416V208H32c-14.2 0-26.7-9.4-30.7-23s1.5-28.3 13.4-35.9zM336 208v208h64V208zM224 416h64V208h-64zM112 208v208h64V208z"],"location-dot":["0 0 384 512","M0 188.6C0 84.4 86 0 192 0s192 84.4 192 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0C120.1 450.9-.1 307.9-.1 188.6zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128"],"masks-theater":["0 0 576 512","m-5 118 28.5 161.7c14 79.5 76.3 141.8 155.8 155.8l12.7 2.2c-16.5-28.6-27.1-60.7-30.6-94.5l-24.1 4.3c-9.7 1.7-18.8-5.8-16.9-15.5 4.8-24.7 19.1-46.6 39.7-60.9v-74.6c-1.4.8-3 1.3-4.7 1.6l-63 11.1c-8.7 1.5-17.3-4.4-15.9-13.1 3.1-19.6 18.4-36 39.1-39.7 17.2-3 33.9 3.5 44.6 15.8v-22.7c0-22.5 6.9-52.4 32.3-73.4 26-21.5 67.7-43.9 124.9-54.2-30.5-16.3-86.3-32-163.8-18.4C73.3 17.7 25.6 53.6 3.5 79.6c-9 10.5-10.8 24.9-8.4 38.5zm213 20.7v174.8c0 80.7 50.5 152.9 126.4 180.4l27.7 10.1c14.1 5.1 29.6 5.1 43.7 0l27.8-10C509.5 466.4 560 394.3 560 313.5V138.7c0-6.9-2.1-13.8-7-18.6-22.6-22.5-78.2-56-169-56s-146.4 33.6-169 56c-4.9 4.9-7 11.7-7 18.6m66.1 187.1c-1.4-7 7-11 12.7-6.6 26.9 20.6 60.6 32.9 97.2 32.9s70.2-12.3 97.2-32.9c5.7-4.4 14.1-.4 12.7 6.6-10.1 51.4-55.5 90.3-109.9 90.3s-99.8-38.8-109.9-90.3m.5-101.5C281.2 205.5 299 192 320 192s38.9 13.5 45.4 32.3c2.9 8.4-4.5 15.7-13.4 15.7h-64c-8.8 0-16.3-7.4-13.4-15.7M480 240h-64c-8.8 0-16.3-7.4-13.4-15.7C409.1 205.5 427 192 448 192s38.9 13.5 45.4 32.3c2.9 8.4-4.5 15.7-13.4 15.7"],"crown":["0 0 576 512","M313 87.2c9.2-7.3 15-18.6 15-31.2 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 12.6 5.9 23.9 15 31.2l-68.4 107.6c-10 15.7-31.3 19.6-46.2 8.4l-59.5-44.5c4.5-6.4 7.1-14.3 7.1-22.7 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 21.8 17.5 39.6 39.2 40l32.6 217.5c4.7 31.3 31.6 54.5 63.3 54.5h273.8c31.7 0 58.6-23.2 63.3-54.5L520.8 176c21.7-.4 39.2-18.2 39.2-40 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 8.4 2.6 16.3 7.1 22.7l-59.4 44.6c-14.9 11.2-36.2 7.3-46.2-8.4z"],"fire":["0 0 448 512","M160.5-26.4c9.3-7.8 23-7.5 31.9.9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1C297 44.3 306.8 32 319.9 32c13.4 0 22.8 11.9 30.8 22.1q1.95 2.55 3.9 4.8c10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z"],"gem":["0 0 512 512","M128 32H384L496 176L256 480L16 176ZM24 168V184H488V168ZM170 40L150 176H170L190 40ZM322 40L342 176H362L342 40Z"],"lightbulb":["0 0 384 512","M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9C364 289.7 384 243.2 384 192 384 86 298 0 192 0S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9h201.7zm-4.9 48H96v16c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24"],"circle-half-stroke":["0 0 512 512","M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"],"cloud-rain":["0 0 512 512","M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c53 0 96 43 96 96s-43 96-96 96zm1.6 68.2c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16zm152 0c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16zm121.8 68.2 30.2-68.2c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16"],"sun":["0 0 576 512","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5L494.1 256l58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3l-103.3 20.8L413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256l-58.2-87.8c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4M207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1-160.8 0m208.8 0a128.4 128.4 0 1 0-256.8 0 128.4 128.4 0 1 0 256.8 0"],"play":["0 0 448 512","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6.7S32 57.9 32 72v368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6.7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1z"],"pause":["0 0 384 512","M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm224 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"],"volume-high":["0 0 640 512","M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8c54.2 44 88.7 111 88.7 186.2s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5M473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c21.5-17.7 35.4-44.5 35.4-74.6s-13.9-56.9-35.4-74.5M80 352h48l134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8V66.8c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48"],"volume-low":["0 0 448 512","M48 352h48l134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8V66.8c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48m332.6-170.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c21.5-17.7 35.4-44.5 35.4-74.6s-13.9-56.9-35.5-74.5z"],"volume-xmark":["0 0 576 512","M48 352h48l134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8V66.8c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48m319-177c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0"],"app-store-ios":["0 0 448 512","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7q24.15-7.35 39.6 11.4zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40m98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20"],"discord":["0 0 576 512","M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1.1s-.6.4-.8.8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2C162.5 39 122.2 51.5 84.1 69c-.3.1-.6.4-.8.7C7.1 183.5-13.8 294.6-3.6 404.2c0 .3.1.5.2.8s.3.4.5.6c44.4 32.9 94 58 146.8 74.2.4.1.8.1 1.1 0s.7-.4.9-.7c11.3-15.4 21.4-31.8 30-48.8.1-.2.2-.5.2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6.2-.9.3-.5.6-.7c3.1-2.3 6.2-4.7 9.1-7.1.3-.2.6-.4.9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1.7-.2 1-.2s.7.2.9.4c2.9 2.4 6 4.9 9.1 7.2.2.2.4.4.6.7s.2.6.2.9-.1.6-.3.9-.4.5-.6.6c-14.7 8.6-30 15.9-45.9 21.8-.2.1-.5.2-.7.4s-.3.4-.4.7-.1.5-.1.8.1.5.2.8c8.8 17 18.8 33.3 30 48.8.2.3.6.6.9.7s.8.1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2.2-.2.4-.4.5-.6s.2-.5.2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2m195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2"],"facebook-f":["0 0 320 512","M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8z"],"google-play":["0 0 448 512","M293.6 234.3 72.9 13l280.8 161.2zM15.3 0C2.3 6.8-6.4 19.2-6.4 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8M72.9 499l280.8-161.2-60.1-60.1z"],"whatsapp":["0 0 448 512","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"],"youtube":["0 0 576 512","M549.7 124.1c-6.2-23.7-24.8-42.3-48.3-48.6C458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5c-23.5 6.3-42 24.9-48.3 48.6C15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8C117.3 448 288.1 448 288.1 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6V175.2l142.7 81.2z"]};
let q=0;
function render(){
  q=0;
  document.querySelectorAll("i.fa-solid,i.fa-brands,i.fa-regular").forEach(el=>{
    if(el.firstElementChild&&el.firstElementChild.tagName==="svg")return;
    const c=[...el.classList].find(x=>x.startsWith("fa-")&&!/^fa-(solid|brands|regular)$/.test(x));
    const d=c&&ICONS[c.slice(3)];if(!d)return;
    const v=d[0].split(" ").map(Number),w=(v[2]/v[3]).toFixed(3);
    el.innerHTML='<svg viewBox="'+d[0]+'" style="height:1em;width:'+w+'em;fill:currentColor;vertical-align:-.125em" aria-hidden="true"><path d="'+d[1]+'"/></svg>';
  });
}
function start(){render();new MutationObserver(()=>{if(!q){q=1;requestAnimationFrame(render)}}).observe(document.body,{childList:true,subtree:true})}
document.body?start():addEventListener("DOMContentLoaded",start);
})();

/* =====================================================================
   IKOIZANA — site vitrine · index.js  (fichier commenté)

   FICHIERS DU DOSSIER
     index.html       la structure de la page (textes de KOTO dans les bulles)
     style.css        les couleurs, animations et thèmes
     index.js         ce fichier : toute la logique
     fa-offline.js    les icônes Font Awesome hors-ligne (aucun Internet requis)
     fontawesome/     tous les dessins SVG gratuits, pour ajouter d'autres icônes
     audio/           👉 mets ici TES mp3 (musique de fond, sons)

   CE QUE TU DOIS MODIFIER (rien d'autre n'est obligatoire)
     1) le bloc CONF juste en dessous : liens Play Store, App Store, réseaux, don
     2) (facultatif) CONF.musique et CONF.sons : chemins vers tes fichiers audio
     3) (facultatif) tes questions : cherche « QUESTIONS DE LA DÉMO »

   SOMMAIRE (cherche ces titres avec Ctrl+F)
     RÉGLAGES · RADIO 80's + EFFETS SONORES · THÈMES · CIEL ÉTOILÉ · DIALOGUE ·
     PAGES + BOUTON SUIVANT · MINI QUIZ · CONTACT · DÉMO INTERACTIVE · CARROUSELS
   ===================================================================== */
/* =====================================================================
   ⚙️  RÉGLAGES — c'est ICI que tu modifies tes liens, tes sons et tes durées
   ===================================================================== */
const CONF={
  // ---- 👉 LIGNES À MODIFIER : tes vrais liens (remplace chaque "#") ----
  email:"contact@ikoizana.com",   // adresse qui reçoit les messages du formulaire de contact
  facebook:"#",                   // 👉 lien de ta page Facebook
  youtube:"#",                    // 👉 lien de ta chaîne YouTube
  whatsapp:"#",discord:"#",                   // 👉 lien WhatsApp (ex : "https://wa.me/261XXXXXXXXX")
  play:"#",                       // 👉 lien de l'app sur Google Play
  apple:"#",                      // 👉 lien de l'app sur l'App Store
  don:"#",                        // 👉 lien « Soutenir le projet » (don, abonnement…)

  // ---- 🎵 MUSIQUE DE FOND (radio) ----
  // Laisse "" pour la petite radio 80's créée par le code (aucun fichier requis).
  // 👉 Pour ta propre musique : mets ton mp3 dans le dossier audio/ puis écris son chemin :
  //    musique:"audio/ma-musique.mp3",   (elle tourne en boucle)
  musique:"",
  autoplay:false,  // true = la musique démarre au 1er toucher/clic du visiteur (les navigateurs interdisent de démarrer seule)
  volume:40,       // volume de départ, de 0 à 100

  // ---- 🔊 AUTRES SONS ----
  // Laisse "" pour un petit bip créé par le code. 👉 Ou mets le chemin de TON fichier téléchargé :
  //    clic:"audio/clic.mp3",
  sons:{
    clic:"",    // quand on clique sur un bouton
    ok:"",      // bonne réponse
    ko:"",      // mauvaise réponse / temps écoulé
    gagne:"",   // résultat parfait
    fin:""      // fin d'un quiz (résultat normal)
  },

  // ---- ⏱️ JEU ----
  duree:20,       // secondes par question
  joker:15,       // secondes ajoutées par le joker « +15 s »
  invitation:120,   // après X secondes, KOTO propose d'installer l'app
  nom:45,           // après X secondes, KOTO demande le nom du joueur
  avis:"#",         // 👉 lien pour laisser un avis (page Google Play / formulaire)
  verrou:true,      // true = une catégorie ne se joue qu'une fois (anti-triche). Test : ajoute ?reset à l'adresse
  koto:{nom:"KOTO",prenom:"Maki",age:"3 ans",nat:"Malagasy",role:"Guide & assistant · IKOIZANA web"}   // après X secondes, KOTO propose d'installer l'app (1 fois par visite)
};
const $=id=>document.getElementById(id),wait=ms=>new Promise(r=>setTimeout(r,ms));
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
if(/[?&]reset/.test(location.search)){try{localStorage.clear()}catch(e){}}
const LG=["mg","zh","fr","en"],LN={mg:"MG",zh:"CH",fr:"FR",en:"EN"};   /* ordre du bouton de langue : MG → CH → FR → EN → MG … (boucle infinie) */
const TX={"fr":{"g":["Bonne nuit","Bonjour","Bon après-midi","Bonsoir"],"w":"Bienvenue sur le site officiel d’IKOIZANA !","s":"🚧 Site en cours de réalisation : tout est une simulation. Avec beaucoup de bons avis et de soutien, nous le terminerons au plus vite !"},"mg":{"g":["Mirary alina tsara","Salama, maraina tsara","Salama, tolakandro tsara","Salama, hariva tsara"],"w":"Tonga soa eto amin’ny tranonkala ofisialin’i IKOIZANA!","s":"🚧 Mbola amboarina ny tranonkala: fanoharana fotsiny ny zavatra rehetra eto. Raha mahazo hevitra tsara sy fanohanana maro izahay, dia hamita azy haingana araka izay azo atao!"},"zh":{"g":["晚安","早上好","下午好","晚上好"],"w":"欢迎来到 IKOIZANA 官方网站！","s":"🚧 网站仍在建设中：一切均为模拟演示。如果能获得大量好评与支持，我们会尽快完成！"},"en":{"g":["Good night","Good morning","Good afternoon","Good evening"],"w":"Welcome to the official IKOIZANA website!","s":"🚧 Site under construction: everything here is a simulation. With lots of great reviews and support, we’ll finish it as fast as we can!"}};
let LANG=(()=>{try{const v=localStorage.getItem("ikz-lang");if(LG.includes(v))return v}catch(e){}const n=(navigator.language||"fr").slice(0,2);return LG.includes(n)?n:"fr"})();
/* ---- Traductions : T4(fr, mg, zh, en) pour les phrases dynamiques ; DICT = textes fixes de la page (clé = texte français) ---- */
const T4=(fr,mg,zh,en)=>({fr,mg,zh,en})[LANG];
const P=o=>o[LANG];
const DICT={"Précédent":{"mg":"Hiverina","zh":"上一步","en":"Previous"},"Suivant":{"mg":"Manaraka","zh":"下一步","en":"Next"},"S’inscrire":{"mg":"Hisoratra anarana","zh":"注册","en":"Sign up"},"Installer l’app":{"mg":"Apetraho ny fampiharana","zh":"安装应用","en":"Install the app"},"Jouer à la démo":{"mg":"Andramo ny lalao","zh":"试玩演示","en":"Play the demo"},"Changer de mode":{"mg":"Hanova ny endrika","zh":"切换主题","en":"Change theme"},"Changer de langue":{"mg":"Hanova ny fiteny","zh":"切换语言","en":"Change language"},"XP accumulé":{"mg":"XP voaangona","zh":"已累计的 XP","en":"XP earned"},"Fermer":{"mg":"Hidio","zh":"关闭","en":"Close"},"Lecture / pause":{"mg":"Alefaso / ajanony","zh":"播放 / 暂停","en":"Play / pause"},"Radio 80’s":{"mg":"Radio taona 80","zh":"80 年代电台","en":"80’s Radio"},"Volume":{"mg":"Haavon’ny feo","zh":"音量","en":"Volume"},"Nuit":{"mg":"Alina","zh":"夜间","en":"Night"},"Sombre":{"mg":"Maizina","zh":"深色","en":"Dark"},"Jour clair":{"mg":"Andro mazava","zh":"明亮日间","en":"Bright day"},"Jour sombre":{"mg":"Andro maizina","zh":"阴天","en":"Dark day"},"IKOIZANA – Apprends en jouant":{"mg":"IKOIZANA – Mianara sady milalao","zh":"IKOIZANA – 边玩边学","en":"IKOIZANA – Learn while you play"},"IKOIZANA : l’application de quiz pour renforcer ta culture générale. Créée à Madagascar, pour le monde entier.":{"mg":"IKOIZANA: fampiharana lalao fanontaniana hampitombo ny kolontsaina ankapobeny anao. Noforonina tany Madagasikara, ho an’izao tontolo izao.","zh":"IKOIZANA：增强常识的问答应用。诞生于马达加斯加，面向全世界。","en":"IKOIZANA: the quiz app to strengthen your general knowledge. Created in Madagascar, for the whole world."},"Accueil":{"mg":"Fandraisana","zh":"首页","en":"Home"},"L’app":{"mg":"Ny fampiharana","zh":"应用介绍","en":"The app"},"Essayer":{"mg":"Andramo","zh":"试一试","en":"Try it"},"Catégories":{"mg":"Sokajy","zh":"分类","en":"Categories"},"Madagascar":{"mg":"Madagasikara","zh":"马达加斯加","en":"Madagascar"},"Soutien":{"mg":"Fanohanana","zh":"支持我们","en":"Support"},"Télécharger":{"mg":"Hisintona","zh":"下载","en":"Download"},"Contact":{"mg":"Fifandraisana","zh":"联系我们","en":"Contact"},"Moi c’est KOTO, ton guide pendant cette visite.":{"mg":"Izaho no KOTO, ilay mpitari-dalana anao mandritra ity fitsidihana ity.","zh":"我是 KOTO，这次参观的向导。","en":"I’m KOTO, your guide for this visit."},"Dis-moi : est-ce que tu m’as déjà entendu quelque part ?":{"mg":"Lazao amiko: efa naheno ny momba ahy ve ianao taiza na taiza?","zh":"告诉我：你以前在哪里听说过我吗？","en":"Tell me: have you heard of me somewhere before?"},"IKOIZANA, c’est l’app pour apprendre et renforcer ta culture générale, gamifiée en QUIZ pour que tu t’épanouisses. 🚀":{"mg":"IKOIZANA dia fampiharana hianarana sy hampitombo ny kolontsaina ankapobeny anao, amin’ny endrika lalao fanontaniana mba hampivelatra anao. 🚀","zh":"IKOIZANA 是一款帮你学习、增强常识的应用，以问答游戏的形式，让你不断成长。🚀","en":"IKOIZANA is the app to learn and strengthen your general knowledge, gamified as a QUIZ so you can grow. 🚀"},"Un petit avant-goût ? Réponds, je suis sûr que tu connais. 😉":{"mg":"Santionany kely? Valio, azoko antoka fa fantatrao ny valiny. 😉","zh":"先来尝尝鲜？回答吧，我相信你知道答案。😉","en":"A little taste? Answer, I’m sure you know it. 😉"},"Voici les catégories. Fais défiler les cartes ! 👉":{"mg":"Ireto ny sokajy. Tariho ny karatra mba hijerena azy rehetra! 👉","zh":"这些是分类。滑动卡片来看看吧！👉","en":"Here are the categories. Swipe through the cards! 👉"},"IKOIZANA est née à Madagascar, créée par HASINIRINA Andrianarivo, et diffusée au monde entier. 🌍":{"mg":"IKOIZANA dia teraka tany Madagasikara, noforonin’i HASINIRINA Andrianarivo, ary zaraina manerana izao tontolo izao. 🌍","zh":"IKOIZANA 诞生于马达加斯加，由 HASINIRINA Andrianarivo 创建，并面向全世界推广。🌍","en":"IKOIZANA was born in Madagascar, created by HASINIRINA Andrianarivo, and shared with the whole world. 🌍"},"Nous mettons Madagascar à l’honneur en premier, sans jamais rabaisser les valeurs des autres pays. 💙":{"mg":"Asongadinay aloha i Madagasikara, nefa tsy manao tsinontsinona ny soatoavin’ny firenena hafa. 💙","zh":"我们优先展现马达加斯加，但绝不贬低其他国家的价值。💙","en":"We put Madagascar first, without ever diminishing the values of other countries. 💙"},"La connaissance est le seul trésor qui grandit quand on le partage. 🌍":{"mg":"Ny fahalalana no hany harena mitombo rehefa zaraina. 🌍","zh":"知识是唯一越分享越增长的财富。🌍","en":"Knowledge is the only treasure that grows when you share it. 🌍"},"Chaque personne qui apprend, c’est un esprit plus ouvert, plus curieux… et une humanité un peu plus unie. Tu peux faire partie de ça. 💙":{"mg":"Ny olona rehetra mianatra dia saina mivelatra sy liana kokoa… ary olombelona mikambana kokoa. Afaka mandray anjara amin’izany ianao. 💙","zh":"每一个学习的人，都是一颗更开放、更好奇的心……也让人类多了一分团结。你也可以成为其中一员。💙","en":"Every person who learns is a more open, more curious mind… and a slightly more united humanity. You can be part of that. 💙"},"IKOIZANA grandit grâce à toi : un partage, un abonnement ou un don, tout compte. Tu nous soutiens ?":{"mg":"Mitombo noho ny fanohananao i IKOIZANA: fizarana, famandrihana na fanomezana, samy manan-danja daholo. Hanohana anay ve ianao?","zh":"IKOIZANA 因你而成长：一次分享、一个订阅或一份捐赠，都很重要。你愿意支持我们吗？","en":"IKOIZANA grows thanks to you: a share, a subscription or a donation, everything counts. Will you support us?"},"Prêt à jouer pour de vrai ? 🚀 Installe l’app sur ton téléphone, ou essaie la démo tout de suite !":{"mg":"Vonona hilalao tena izy ve? 🚀 Apetraho amin’ny findainao ny fampiharana, na andramo avy hatrany ny lalao!","zh":"准备好真正开玩了吗？🚀 在手机上安装应用，或者马上试玩演示！","en":"Ready to play for real? 🚀 Install the app on your phone, or try the demo right now!"},"Restons en contact ! Écris-nous directement ici, ou retrouve-nous ailleurs ! ✉️":{"mg":"Aoka hifandray foana isika! Soraty eto mivantana ny hafatrao, na hitantsika any amin’ny tambajotra hafa! ✉️","zh":"保持联系吧！直接在这里给我们留言，或在其他平台找到我们！✉️","en":"Let’s stay in touch! Write to us right here, or find us elsewhere! ✉️"},"Génial, content de te revoir ! 🎉 Il y a du nouveau, suis-moi.":{"mg":"Tsara izany, faly mihaona aminao indray! 🎉 Misy vaovao, araho aho.","zh":"太好了，很高兴再见到你！🎉 有新东西，跟我来。","en":"Great, good to see you again! 🎉 There’s something new, follow me."},"Pas de souci, enchanté ! 🤝 Je te montre tout depuis le début.":{"mg":"Tsy maninona, faly mahalala anao! 🤝 Asehoko anao daholo hatramin’ny voalohany.","zh":"没关系，很高兴认识你！🤝 我从头带你看看。","en":"No worries, nice to meet you! 🤝 I’ll show you everything from the start."},"Haha, alors je vais parler plus fort ! 📢 Clique sur Suivant.":{"mg":"Haha, dia hiteny mafy kokoa aho! 📢 Tsindrio ny hoe Manaraka.","zh":"哈哈，那我要大声一点！📢 请点击“下一步”。","en":"Haha, then I’ll speak up! 📢 Click Next."},"Moi, c’est KOTO ! 🐒 Un lémurien curieux de Madagascar et le guide d’IKOIZANA. Je pose les questions, je te félicite quand tu brilles… et je te gronde (gentiment) quand il faut réviser. Ma mission : te faire aimer apprendre !":{"mg":"Izaho no KOTO! 🐒 Lemura liana avy any Madagasikara ary mpitari-dalan’i IKOIZANA. Izaho no manontany, mankalaza anao rehefa mamirapiratra ianao… ary mananatra anao (am-pitiavana) rehefa tokony hiverina hianatra. Ny iraka ananako: hampitia anao ny mianatra!","zh":"我是 KOTO！🐒 来自马达加斯加的好奇狐猴，也是 IKOIZANA 的向导。我负责提问，你表现出色时为你喝彩……需要复习时也会（温柔地）提醒你。我的使命：让你爱上学习！","en":"I’m KOTO! 🐒 A curious lemur from Madagascar and the guide of IKOIZANA. I ask the questions, I cheer when you shine… and I (gently) scold you when it’s time to review. My mission: to make you love learning!"},"Oui":{"mg":"Eny","zh":"是","en":"Yes"},"Non":{"mg":"Tsia","zh":"不","en":"No"},"Oui mais pas très bien":{"mg":"Eny, fa tsy dia tsara loatra","zh":"听过，但不太清楚","en":"Yes, but not very well"},"Qui es-tu, KOTO ?":{"mg":"Iza moa ianao, KOTO?","zh":"KOTO，你是谁？","en":"Who are you, KOTO?"},"🪪 Montre-moi ta carte pro":{"mg":"🪪 Asehoy ahy ny karatrao ara-piasana","zh":"🪪 给我看看你的名片","en":"🪪 Show me your pro card"},"Curieux ?":{"mg":"Liana ve ianao?","zh":"好奇吗？","en":"Curious?"},"Des notions expliquées, des mystères révélés, des réponses pour prendre de l’avance.":{"mg":"Hevitra nofaritana, zava-miafina nambara ary valiny hanampy anao handroso mialoha.","zh":"把知识讲明白，把谜团揭开，用答案帮你抢先一步。","en":"Concepts explained, mysteries revealed, answers to help you get ahead."},"Tester ton niveau ?":{"mg":"Hitsapa ny haavon’ny fahalalanao ve ianao?","zh":"测测你的水平？","en":"Test your level?"},"Des quiz en catégories et sous-catégories. Une ligue d’environ 50 joueurs, classement mensuel.":{"mg":"Lalao fanontaniana isaky ny sokajy sy zana-sokajy. Fifaninanana misy mpilalao 50 eo ho eo, miaraka amin’ny filaharana isam-bolana.","zh":"按类别和子类别划分的问答。约 50 名玩家组成一个联赛，每月排名。","en":"Quizzes by category and sub-category. A league of about 50 players, with monthly rankings."},"Compétiteur ?":{"mg":"Tia fifaninanana ve ianao?","zh":"爱竞争吗？","en":"Competitive?"},"Classement de tous les temps, défis quotidiens, plusieurs modes de jeu. Même en apprenant !":{"mg":"Filaharana hatramin’ny voalohany, fanamby isan’andro ary fomba filalaovana maro. Na dia mianatra aza ianao!","zh":"历史总排名、每日挑战、多种游戏模式。边学边竞争！","en":"All-time ranking, daily challenges, several game modes. Even while learning!"},"Mérites":{"mg":"Mari-boninahitra","zh":"成就","en":"Achievements"},"Des récompenses tout au long de ton parcours.":{"mg":"Mahazo valisoa ianao isaky ny dingana arahinao.","zh":"一路走来，处处有奖励。","en":"Rewards all along your journey."},"Touche : le savais-tu ?":{"mg":"Tsindrio: fantatrao ve?","zh":"点击：你知道吗？","en":"Tap: did you know?"},"Touche : lance la démo":{"mg":"Tsindrio: atombohy ny lalao","zh":"点击：开始试玩","en":"Tap: start the demo"},"Touche : vois la ligue":{"mg":"Tsindrio: jereo ny fifaninanana","zh":"点击：查看联赛","en":"Tap: see the league"},"Touche : vois tes mérites":{"mg":"Tsindrio: jereo ny mari-boninahitrao","zh":"点击：查看你的成就","en":"Tap: see your achievements"},"Tester mon niveau":{"mg":"Hitsapa ny haavoko","zh":"测测我的水平","en":"Test my level"},"Philosophie":{"mg":"Filozofia","zh":"哲学","en":"Philosophy"},"Trouve l’intrus, le vrai citateur, la pensée ancienne et récente.":{"mg":"Tadiavo ny tsy mitovy amin’ny hafa, ilay tena mpanoratra ny teny nalaina, ary ny fisainana taloha sy ankehitriny.","zh":"找出异类，认出名言真正的作者，了解古今思想。","en":"Spot the odd one out, find who really said it, explore ancient and recent thought."},"Logique":{"mg":"Lojika","zh":"逻辑","en":"Logic"},"Calculs, formules scientifiques : trouve la bonne réponse.":{"mg":"Kajy sy raikipohy ara-tsiansa: tadiavo ny valiny marina.","zh":"计算和科学公式：找出正确答案。","en":"Calculations and scientific formulas: find the right answer."},"Art":{"mg":"Zavakanto","zh":"艺术","en":"Art"},"Artistes, créateurs, fondateurs et vraies œuvres.":{"mg":"Mpanakanto, mpamorona, mpisava lalana ary asa tena izy.","zh":"艺术家、创作者、开创者与真正的作品。","en":"Artists, creators, pioneers and genuine works."},"Nature":{"mg":"Natiora","zh":"自然","en":"Nature"},"Faune, flore, espèces rares et endémiques.":{"mg":"Biby, zavamaniry ary karazana tsy fahita firy na tsy hita afa-tsy any amin’ny toerana iray.","zh":"动物、植物，以及珍稀和特有物种。","en":"Fauna, flora, rare and endemic species."},"Géographie":{"mg":"Jeografia","zh":"地理","en":"Geography"},"Pays, capitales, population, monnaies, lieux iconiques.":{"mg":"Firenena, renivohitra, mponina, vola ary toerana malaza.","zh":"国家、首都、人口、货币和标志性地点。","en":"Countries, capitals, population, currencies, iconic places."},"Sport":{"mg":"Fanatanjahan-tena","zh":"体育","en":"Sport"},"Légendes, lieux de tournois, records emblématiques.":{"mg":"Lohalaharana malaza, toerana anaovana fifaninanana ary firaketana tsy hay hadinoina.","zh":"传奇人物、赛事举办地和标志性纪录。","en":"Legends, tournament venues, iconic records."},"Histoire":{"mg":"Tantara","zh":"历史","en":"History"},"Dates, lieux et événements qui ont marqué l’humanité.":{"mg":"Daty, toerana ary zava-nitranga nanamarika ny tantaran’ny olombelona.","zh":"改变人类历史的日期、地点和事件。","en":"Dates, places and events that have marked humanity."},"Culture":{"mg":"Kolontsaina","zh":"文化","en":"Culture"},"Culture locale et universelle, ancienne et actuelle.":{"mg":"Kolontsaina eto an-toerana sy manerantany, taloha sy ankehitriny.","zh":"本地与世界的文化，古老与当代。","en":"Local and universal culture, ancient and current."},"Ton île, ton histoire, ta culture, mises en valeur en premier.":{"mg":"Ny nosinao, ny tantaranao ary ny kolontsainao no asongadina aloha.","zh":"你的岛屿、你的历史、你的文化，优先呈现。","en":"Your island, your history, your culture, showcased first."},"Fait à Madagascar":{"mg":"Vita eto Madagasikara","zh":"马达加斯加制造","en":"Made in Madagascar"},"Pour le monde entier":{"mg":"Ho an’izao tontolo izao","zh":"面向全世界","en":"For the whole world"},"Expériences inoubliables":{"mg":"Traikefa tsy hay hadinoina","zh":"难忘的体验","en":"Unforgettable experiences"},"Partager IKOIZANA":{"mg":"Zarao i IKOIZANA","zh":"分享 IKOIZANA","en":"Share IKOIZANA"},"Pourquoi ça compte ?":{"mg":"Nahoana no zava-dehibe izany?","zh":"为什么这很重要？","en":"Why does it matter?"},"Nous suivre sur les réseaux":{"mg":"Araho izahay amin’ny tambajotra sosialy","zh":"在社交平台关注我们","en":"Follow us on social media"},"Soutenir le projet":{"mg":"Tohano ny tetikasa","zh":"支持这个项目","en":"Support the project"},"Ton nom":{"mg":"Ny anaranao","zh":"你的名字","en":"Your name"},"Écris ton message ici…":{"mg":"Soraty eto ny hafatrao…","zh":"在这里写下你的留言……","en":"Write your message here…"},"Ton message":{"mg":"Ny hafatrao","zh":"你的留言","en":"Your message"},"Envoyer par mail":{"mg":"Alefa amin’ny mailaka","zh":"通过邮件发送","en":"Send by email"},"⭐ Laisser un avis (5 étoiles)":{"mg":"⭐ Avelao ny hevitrao (kintana 5)","zh":"⭐ 留下评价（五星）","en":"⭐ Leave a review (5 stars)"},"Plutôt la démo":{"mg":"Aleoko ny lalao","zh":"还是试玩演示吧","en":"Try the demo instead"},"Voir la réponse":{"mg":"Jereo ny valiny","zh":"查看答案","en":"Show the answer"},"Oui, je joue (8 questions) !":{"mg":"Eny, hilalao aho (fanontaniana 8)!","zh":"好，我来挑战（8 道题）！","en":"Yes, I’m playing (8 questions)!"},"Valider":{"mg":"Hamarino","zh":"确认","en":"Confirm"},"Rester anonyme":{"mg":"Tsy hilaza anarana","zh":"保持匿名","en":"Stay anonymous"},"Ton nom de joueur (facultatif)":{"mg":"Anaran’ny mpilalao (tsy voatery)","zh":"你的玩家昵称（选填）","en":"Your player name (optional)"},"Nom de joueur":{"mg":"Anaran’ny mpilalao","zh":"玩家昵称","en":"Player name"},"Enregistrer mon XP":{"mg":"Tehirizo ny XP-ko","zh":"保存我的 XP","en":"Save my XP"},"E-mail ou numéro de téléphone":{"mg":"Mailaka na laharan-telefaona","zh":"电子邮箱或手机号码","en":"Email or phone number"},"E-mail ou téléphone":{"mg":"Mailaka na telefaona","zh":"电子邮箱或手机","en":"Email or phone"},"Entre un e-mail ou un numéro valide.":{"mg":"Ampidiro mailaka na laharana manankery.","zh":"请输入有效的电子邮箱或号码。","en":"Enter a valid email or phone number."},"Enregistré (simulation)":{"mg":"Voasoratra (fanoharana)","zh":"已登记（演示）","en":"Registered (simulation)"},"Oui, les 4 dernières !":{"mg":"Eny, ireo 4 farany!","zh":"好，做最后 4 道题！","en":"Yes, the last 4!"},"Arrêter ici":{"mg":"Hijanona eto","zh":"到此为止","en":"Stop here"},"Faire une révision":{"mg":"Hamerina ny diso","zh":"复习错题","en":"Review mistakes"},"Garder mon XP":{"mg":"Tehirizo ny XP-ko","zh":"保留我的 XP","en":"Keep my XP"},"⭐ Laisser un avis":{"mg":"⭐ Avelao ny hevitrao","zh":"⭐ 留下评价","en":"⭐ Leave a review"},"Autre catégorie":{"mg":"Sokajy hafa","zh":"其他类别","en":"Another category"},"Explorer d’abord (je prends le risque)":{"mg":"Hijery aloha (manaiky ny loza aho)","zh":"先去探索（我愿意承担风险）","en":"Explore first (I’ll take the risk)"},"Envoyer mon avis":{"mg":"Alefa ny hevitro","zh":"提交我的评价","en":"Submit my review"},"Touche une étoile d’abord ⭐":{"mg":"Tsindrio aloha ny kintana iray ⭐","zh":"请先选一个星级 ⭐","en":"Tap a star first ⭐"},"Un petit mot (facultatif)":{"mg":"Teny fohy (tsy voatery)","zh":"写几句话（选填）","en":"A short note (optional)"},"Nom":{"mg":"Anarana","zh":"姓","en":"Last name"},"Prénom":{"mg":"Fanampin’anarana","zh":"名","en":"First name"},"Âge":{"mg":"Taona","zh":"年龄","en":"Age"},"Nationalité":{"mg":"Zom-pirenena","zh":"国籍","en":"Nationality"},"3 ans":{"mg":"3 taona","zh":"3 岁","en":"3 years old"},"Malagasy":{"mg":"Malagasy","zh":"马达加斯加人","en":"Malagasy"},"Guide & assistant · IKOIZANA web":{"mg":"Mpitari-dalana sy mpanampy · IKOIZANA web","zh":"向导兼助手 · IKOIZANA 网站","en":"Guide & assistant · IKOIZANA web"},"Message depuis le site IKOIZANA":{"mg":"Hafatra avy amin’ny tranonkala IKOIZANA","zh":"来自 IKOIZANA 网站的留言","en":"Message from the IKOIZANA website"},"Ton application mail s’ouvre… Sinon écris à ":{"mg":"Misokatra ny fampiharana mailakao… Raha tsy izany, soraty any amin’ny ","zh":"你的邮件应用正在打开……如果没有，请写信到 ","en":"Your mail app is opening… Otherwise write to "},"Teste ta culture générale avec IKOIZANA !":{"mg":"Andramo ny kolontsaina ankapobeny anao miaraka amin’i IKOIZANA!","zh":"用 IKOIZANA 测测你的常识吧！","en":"Test your general knowledge with IKOIZANA!"},"Lien copié ✔ Partage-le autour de toi !":{"mg":"Voadika ny rohy ✔ Zarao amin’ny manodidina anao!","zh":"链接已复制 ✔ 快分享给身边的人吧！","en":"Link copied ✔ Share it with the people around you!"}};
const OPT={"Descartes":{"mg":"Descartes","zh":"笛卡尔","en":"Descartes"},"Platon":{"mg":"Platon","zh":"柏拉图","en":"Plato"},"Kant":{"mg":"Kant","zh":"康德","en":"Kant"},"Nietzsche":{"mg":"Nietzsche","zh":"尼采","en":"Nietzsche"},"Socrate":{"mg":"Sokrata","zh":"苏格拉底","en":"Socrates"},"Aristote":{"mg":"Aristôta","zh":"亚里士多德","en":"Aristotle"},"Épicure":{"mg":"Epikora","zh":"伊壁鸠鲁","en":"Epicurus"},"Diogène":{"mg":"Diôjeny","zh":"第欧根尼","en":"Diogenes"},"Sartre":{"mg":"Sartre","zh":"萨特","en":"Sartre"},"Camus":{"mg":"Camus","zh":"加缪","en":"Camus"},"Voltaire":{"mg":"Voltaire","zh":"伏尔泰","en":"Voltaire"},"Rousseau":{"mg":"Rousseau","zh":"卢梭","en":"Rousseau"},"Hobbes":{"mg":"Hobbes","zh":"霍布斯","en":"Hobbes"},"Locke":{"mg":"Locke","zh":"洛克","en":"Locke"},"Hegel":{"mg":"Hegel","zh":"黑格尔","en":"Hegel"},"Spinoza":{"mg":"Spinoza","zh":"斯宾诺莎","en":"Spinoza"},"Marx":{"mg":"Marx","zh":"马克思","en":"Marx"},"Montesquieu":{"mg":"Montesquieu","zh":"孟德斯鸠","en":"Montesquieu"},"Diderot":{"mg":"Diderot","zh":"狄德罗","en":"Diderot"},"Pascal":{"mg":"Pascal","zh":"帕斯卡","en":"Pascal"},"Impressionnisme":{"mg":"Empresionisma","zh":"印象派","en":"Impressionism"},"Stoïcisme":{"mg":"Stoisisma","zh":"斯多葛主义","en":"Stoicism"},"Épicurisme":{"mg":"Epikorisma","zh":"伊壁鸠鲁主义","en":"Epicureanism"},"Scepticisme":{"mg":"Skeptisisma","zh":"怀疑主义","en":"Skepticism"},"Hume":{"mg":"Hume","zh":"休谟","en":"Hume"},"Leibniz":{"mg":"Leibniz","zh":"莱布尼茨","en":"Leibniz"},"Schopenhauer":{"mg":"Schopenhauer","zh":"叔本华","en":"Schopenhauer"},"300 000 km/s":{"mg":"300 000 km/s","zh":"30 万公里/秒","en":"300,000 km/s"},"30 000 km/s":{"mg":"30 000 km/s","zh":"3 万公里/秒","en":"30,000 km/s"},"3 000 km/s":{"mg":"3 000 km/s","zh":"3,000 公里/秒","en":"3,000 km/s"},"3 000 000 km/s":{"mg":"3 000 000 km/s","zh":"300 万公里/秒","en":"3,000,000 km/s"},"3,14":{"mg":"3,14","zh":"3.14","en":"3.14"},"2,71":{"mg":"2,71","zh":"2.71","en":"2.71"},"1,62":{"mg":"1,62","zh":"1.62","en":"1.62"},"3,41":{"mg":"3,41","zh":"3.41","en":"3.41"},"Einstein":{"mg":"Einstein","zh":"爱因斯坦","en":"Einstein"},"Newton":{"mg":"Newton","zh":"牛顿","en":"Newton"},"Galilée":{"mg":"Galileo","zh":"伽利略","en":"Galileo"},"Tesla":{"mg":"Tesla","zh":"特斯拉","en":"Tesla"},"Léonard de Vinci":{"mg":"Leonardo da Vinci","zh":"列奥纳多·达·芬奇","en":"Leonardo da Vinci"},"Michel-Ange":{"mg":"Mikelanjelo","zh":"米开朗基罗","en":"Michelangelo"},"Raphaël":{"mg":"Rafaely","zh":"拉斐尔","en":"Raphael"},"Botticelli":{"mg":"Botticelli","zh":"波提切利","en":"Botticelli"},"Van Gogh":{"mg":"Van Gogh","zh":"梵高","en":"Van Gogh"},"Monet":{"mg":"Monet","zh":"莫奈","en":"Monet"},"Picasso":{"mg":"Picasso","zh":"毕加索","en":"Picasso"},"Dalí":{"mg":"Dalí","zh":"达利","en":"Dalí"},"Miró":{"mg":"Miró","zh":"米罗","en":"Miró"},"Matisse":{"mg":"Matisse","zh":"马蒂斯","en":"Matisse"},"Rodin":{"mg":"Rodin","zh":"罗丹","en":"Rodin"},"Donatello":{"mg":"Donatello","zh":"多纳泰罗","en":"Donatello"},"Bernin":{"mg":"Bernini","zh":"贝尼尼","en":"Bernini"},"Le Louvre":{"mg":"Ny Louvre","zh":"卢浮宫","en":"The Louvre"},"Le Prado":{"mg":"Ny Prado","zh":"普拉多博物馆","en":"The Prado"},"L’Ermitage":{"mg":"Ny Hermitage","zh":"冬宫博物馆","en":"The Hermitage"},"Le MoMA":{"mg":"Ny MoMA","zh":"纽约现代艺术博物馆","en":"The MoMA"},"Renoir":{"mg":"Renoir","zh":"雷诺阿","en":"Renoir"},"Manet":{"mg":"Manet","zh":"马奈","en":"Manet"},"Degas":{"mg":"Degas","zh":"德加","en":"Degas"},"Beethoven":{"mg":"Beethoven","zh":"贝多芬","en":"Beethoven"},"Mozart":{"mg":"Mozart","zh":"莫扎特","en":"Mozart"},"Bach":{"mg":"Bach","zh":"巴赫","en":"Bach"},"Chopin":{"mg":"Chopin","zh":"肖邦","en":"Chopin"},"Titien":{"mg":"Titiana","zh":"提香","en":"Titian"},"Le lémurien":{"mg":"Ny lemura","zh":"狐猴","en":"Lemur"},"Le panda":{"mg":"Ny panda","zh":"大熊猫","en":"Panda"},"Le koala":{"mg":"Ny koala","zh":"考拉","en":"Koala"},"Le tigre":{"mg":"Ny tigra","zh":"老虎","en":"Tiger"},"L’éléphant d’Afrique":{"mg":"Ny elefanta afrikana","zh":"非洲象","en":"African elephant"},"La girafe":{"mg":"Ny jiraffa","zh":"长颈鹿","en":"Giraffe"},"Le rhinocéros":{"mg":"Ny rinoseroza","zh":"犀牛","en":"Rhinoceros"},"L’hippopotame":{"mg":"Ny hipopotama","zh":"河马","en":"Hippopotamus"},"Le baobab":{"mg":"Ny reniala","zh":"猴面包树","en":"Baobab"},"Le chêne":{"mg":"Ny hazo ôka","zh":"橡树","en":"Oak"},"Le palmier":{"mg":"Ny hazo palma","zh":"棕榈树","en":"Palm tree"},"Le sapin":{"mg":"Ny hazo paina","zh":"冷杉","en":"Fir tree"},"Le dioxyde de carbone":{"mg":"Ny entona karbônika","zh":"二氧化碳","en":"Carbon dioxide"},"L’oxygène":{"mg":"Ny oksizenina","zh":"氧气","en":"Oxygen"},"L’azote":{"mg":"Ny azota","zh":"氮气","en":"Nitrogen"},"L’hélium":{"mg":"Ny helioma","zh":"氦气","en":"Helium"},"Le Pacifique":{"mg":"Ny Ranomasimbe Pasifika","zh":"太平洋","en":"Pacific Ocean"},"L’Atlantique":{"mg":"Ny Ranomasimbe Atlantika","zh":"大西洋","en":"Atlantic Ocean"},"L’Indien":{"mg":"Ny Ranomasimbe Indiana","zh":"印度洋","en":"Indian Ocean"},"L’Arctique":{"mg":"Ny Ranomasimbe Arktika","zh":"北冰洋","en":"Arctic Ocean"},"La chauve-souris":{"mg":"Ny ramanavy","zh":"蝙蝠","en":"Bat"},"L’écureuil volant":{"mg":"Ny ekirely mpanidina","zh":"鼯鼠","en":"Flying squirrel"},"Le colibri":{"mg":"Ny kolibri","zh":"蜂鸟","en":"Hummingbird"},"Le paresseux":{"mg":"Ny slota","zh":"树懒","en":"Sloth"},"Une orchidée":{"mg":"Orkideà","zh":"兰花","en":"An orchid"},"La canne à sucre":{"mg":"Ny fary","zh":"甘蔗","en":"Sugar cane"},"Le cacaoyer":{"mg":"Ny hazo kakao","zh":"可可树","en":"Cocoa tree"},"Antananarivo":{"mg":"Antananarivo","zh":"塔那那利佛","en":"Antananarivo"},"Toamasina":{"mg":"Toamasina","zh":"图阿马西纳","en":"Toamasina"},"Antsirabe":{"mg":"Antsirabe","zh":"安齐拉贝","en":"Antsirabe"},"Mahajanga":{"mg":"Mahajanga","zh":"马哈赞加","en":"Mahajanga"},"Tokyo":{"mg":"Tokyo","zh":"东京","en":"Tokyo"},"Kyoto":{"mg":"Kyoto","zh":"京都","en":"Kyoto"},"Osaka":{"mg":"Osaka","zh":"大阪","en":"Osaka"},"Séoul":{"mg":"Seoul","zh":"首尔","en":"Seoul"},"Le Nil":{"mg":"Ny Nil","zh":"尼罗河","en":"The Nile"},"Le Congo":{"mg":"Ny Kongo","zh":"刚果河","en":"The Congo"},"Le Niger":{"mg":"Ny Nizera","zh":"尼日尔河","en":"The Niger"},"Le Zambèze":{"mg":"Ny Zambezy","zh":"赞比西河","en":"The Zambezi"},"L’ariary":{"mg":"Ny ariary","zh":"阿里亚里","en":"Ariary"},"Le franc CFA":{"mg":"Ny farana CFA","zh":"非洲法郎","en":"CFA franc"},"Le shilling":{"mg":"Ny shilling","zh":"先令","en":"Shilling"},"Le rand":{"mg":"Ny rand","zh":"兰特","en":"Rand"},"Le Nigeria":{"mg":"Nizeria","zh":"尼日利亚","en":"Nigeria"},"L’Éthiopie":{"mg":"Etiopia","zh":"埃塞俄比亚","en":"Ethiopia"},"L’Égypte":{"mg":"Ejipta","zh":"埃及","en":"Egypt"},"L’Afrique du Sud":{"mg":"Afrika Atsimo","zh":"南非","en":"South Africa"},"Le Pérou":{"mg":"Peroa","zh":"秘鲁","en":"Peru"},"Le Mexique":{"mg":"Meksika","zh":"墨西哥","en":"Mexico"},"La Bolivie":{"mg":"Bolivia","zh":"玻利维亚","en":"Bolivia"},"Le Chili":{"mg":"Shily","zh":"智利","en":"Chile"},"L’Everest":{"mg":"Everest","zh":"珠穆朗玛峰","en":"Mount Everest"},"Le K2":{"mg":"K2","zh":"乔戈里峰（K2）","en":"K2"},"Le Mont Blanc":{"mg":"Mont Blanc","zh":"勃朗峰","en":"Mont Blanc"},"Le Kilimandjaro":{"mg":"Kilimanjaro","zh":"乞力马扎罗山","en":"Mount Kilimanjaro"},"Madagascar":{"mg":"Madagasikara","zh":"马达加斯加","en":"Madagascar"},"Zanzibar":{"mg":"Zanzibar","zh":"桑给巴尔","en":"Zanzibar"},"Maurice":{"mg":"Maorisy","zh":"毛里求斯","en":"Mauritius"},"Sao Tomé":{"mg":"Sao Tome","zh":"圣多美","en":"São Tomé"},"4 ans":{"mg":"4 taona","zh":"4 年","en":"4 years"},"2 ans":{"mg":"2 taona","zh":"2 年","en":"2 years"},"3 ans":{"mg":"3 taona","zh":"3 年","en":"3 years"},"5 ans":{"mg":"5 taona","zh":"5 年","en":"5 years"},"L’Argentine":{"mg":"Arzantina","zh":"阿根廷","en":"Argentina"},"La France":{"mg":"Frantsa","zh":"法国","en":"France"},"Le Brésil":{"mg":"Brezila","zh":"巴西","en":"Brazil"},"La Croatie":{"mg":"Kroasia","zh":"克罗地亚","en":"Croatia"},"Usain Bolt":{"mg":"Usain Bolt","zh":"尤塞恩·博尔特","en":"Usain Bolt"},"Carl Lewis":{"mg":"Carl Lewis","zh":"卡尔·刘易斯","en":"Carl Lewis"},"Justin Gatlin":{"mg":"Justin Gatlin","zh":"贾斯汀·加特林","en":"Justin Gatlin"},"Tyson Gay":{"mg":"Tyson Gay","zh":"泰森·盖伊","en":"Tyson Gay"},"Le tennis":{"mg":"Ny tenisy","zh":"网球","en":"Tennis"},"Le golf":{"mg":"Ny golf","zh":"高尔夫","en":"Golf"},"Le cyclisme":{"mg":"Ny bisikileta","zh":"自行车","en":"Cycling"},"Le rugby":{"mg":"Ny rogby","zh":"橄榄球","en":"Rugby"},"42,195 km":{"mg":"42,195 km","zh":"42.195 公里","en":"42.195 km"},"21 km":{"mg":"21 km","zh":"21 公里","en":"21 km"},"50 km":{"mg":"50 km","zh":"50 公里","en":"50 km"},"36 km":{"mg":"36 km","zh":"36 公里","en":"36 km"},"Le basket-ball":{"mg":"Ny basikety","zh":"篮球","en":"Basketball"},"Le baseball":{"mg":"Ny baseball","zh":"棒球","en":"Baseball"},"Le football américain":{"mg":"Ny baolina kitra amerikana","zh":"美式橄榄球","en":"American football"},"La Chine":{"mg":"Sina","zh":"中国","en":"China"},"Le Royaume-Uni":{"mg":"Ny Fanjakana Mitambatra","zh":"英国","en":"The United Kingdom"},"La Grèce":{"mg":"Grisia","zh":"希腊","en":"Greece"},"George Washington":{"mg":"George Washington","zh":"乔治·华盛顿","en":"George Washington"},"Abraham Lincoln":{"mg":"Abraham Lincoln","zh":"亚伯拉罕·林肯","en":"Abraham Lincoln"},"Thomas Jefferson":{"mg":"Thomas Jefferson","zh":"托马斯·杰斐逊","en":"Thomas Jefferson"},"John Adams":{"mg":"John Adams","zh":"约翰·亚当斯","en":"John Adams"},"L’Égypte antique":{"mg":"Ejipta fahiny","zh":"古埃及","en":"Ancient Egypt"},"Les Mayas":{"mg":"Ny Maya","zh":"玛雅人","en":"The Maya"},"Les Romains":{"mg":"Ny Romanina","zh":"古罗马人","en":"The Romans"},"Les Grecs":{"mg":"Ny Grika","zh":"古希腊人","en":"The Greeks"},"Rome":{"mg":"Roma","zh":"罗马","en":"Rome"},"Athènes":{"mg":"Atena","zh":"雅典","en":"Athens"},"Carthage":{"mg":"Kartazy","zh":"迦太基","en":"Carthage"},"Sparte":{"mg":"Sparta","zh":"斯巴达","en":"Sparta"},"Ranavalona III":{"mg":"Ranavalona III","zh":"拉纳瓦洛娜三世","en":"Ranavalona III"},"Ranavalona Ire":{"mg":"Ranavalona I","zh":"拉纳瓦洛娜一世","en":"Ranavalona I"},"Rasoherina":{"mg":"Rasoherina","zh":"拉索赫里纳","en":"Rasoherina"},"Rabodo":{"mg":"Rabodo","zh":"拉博多","en":"Rabodo"},"Le malgache":{"mg":"Ny teny malagasy","zh":"马达加斯加语","en":"Malagasy"},"Le swahili":{"mg":"Ny swahili","zh":"斯瓦希里语","en":"Swahili"},"Le créole":{"mg":"Ny kreôla","zh":"克里奥尔语","en":"Creole"},"L’arabe":{"mg":"Ny arabo","zh":"阿拉伯语","en":"Arabic"},"Famadihana":{"mg":"Famadihana","zh":"法马迪哈纳节","en":"Famadihana"},"Fandroana":{"mg":"Fandroana","zh":"法卓阿纳节","en":"Fandroana"},"Alahamadibe":{"mg":"Alahamadibe","zh":"阿拉哈马迪贝节","en":"Alahamadibe"},"Hira gasy":{"mg":"Hira gasy","zh":"希拉加西","en":"Hira gasy"},"La valiha":{"mg":"Ny valiha","zh":"瓦利哈琴","en":"Valiha"},"Le djembé":{"mg":"Ny djembe","zh":"非洲鼓（金贝鼓）","en":"Djembe"},"La kora":{"mg":"Ny kora","zh":"科拉琴","en":"Kora"},"Le sitar":{"mg":"Ny sitara","zh":"西塔琴","en":"Sitar"},"Le romazava":{"mg":"Ny romazava","zh":"罗马扎瓦炖菜","en":"Romazava"},"Le couscous":{"mg":"Ny kuskus","zh":"库斯库斯","en":"Couscous"},"La paella":{"mg":"Ny paella","zh":"西班牙海鲜饭","en":"Paella"},"Le ndolé":{"mg":"Ny ndole","zh":"恩多莱炖菜","en":"Ndolé"},"L’Espagne":{"mg":"Espaina","zh":"西班牙","en":"Spain"},"L’Italie":{"mg":"Italia","zh":"意大利","en":"Italy"},"Hanami":{"mg":"Hanami","zh":"赏樱（花见）","en":"Hanami"},"Diwali":{"mg":"Diwali","zh":"排灯节","en":"Diwali"},"Holi":{"mg":"Holi","zh":"洒红节","en":"Holi"},"Obon":{"mg":"Obon","zh":"盂兰盆节","en":"Obon"},"Le tango":{"mg":"Ny tango","zh":"探戈","en":"Tango"},"La salsa":{"mg":"Ny salsa","zh":"萨尔萨舞","en":"Salsa"},"La samba":{"mg":"Ny samba","zh":"桑巴舞","en":"Samba"},"Le flamenco":{"mg":"Ny flamenco","zh":"弗拉门戈舞","en":"Flamenco"},"Victor Hugo":{"mg":"Victor Hugo","zh":"维克多·雨果","en":"Victor Hugo"},"Émile Zola":{"mg":"Emile Zola","zh":"埃米尔·左拉","en":"Émile Zola"},"Balzac":{"mg":"Balzac","zh":"巴尔扎克","en":"Balzac"},"Molière":{"mg":"Molière","zh":"莫里哀","en":"Molière"},"Antsiranana":{"mg":"Antsiranana","zh":"安齐拉纳纳","en":"Antsiranana"},"Nosy Be":{"mg":"Nosy Be","zh":"诺西贝","en":"Nosy Be"},"Morondava":{"mg":"Morondava","zh":"穆龙达瓦","en":"Morondava"},"Les baobabs":{"mg":"Ny reniala","zh":"猴面包树","en":"Baobabs"},"Les palmiers":{"mg":"Ny hazo palma","zh":"棕榈树","en":"Palm trees"},"Les cocotiers":{"mg":"Ny hazo voanio","zh":"椰子树","en":"Coconut palms"},"Les eucalyptus":{"mg":"Ny hazo kininina","zh":"桉树","en":"Eucalyptus trees"},"Bemaraha":{"mg":"Bemaraha","zh":"贝马拉哈","en":"Bemaraha"},"Isalo":{"mg":"Isalo","zh":"伊萨洛","en":"Isalo"},"Ranomafana":{"mg":"Ranomafana","zh":"拉诺马法纳","en":"Ranomafana"},"Andasibe":{"mg":"Andasibe","zh":"安达西贝","en":"Andasibe"},"Le bleu":{"mg":"Ny manga","zh":"蓝色","en":"Blue"},"Le blanc":{"mg":"Ny fotsy","zh":"白色","en":"White"},"Le rouge":{"mg":"Ny mena","zh":"红色","en":"Red"},"Le vert":{"mg":"Ny maitso","zh":"绿色","en":"Green"},"Doucement, sans se presser":{"mg":"Moramora, tsy maika","zh":"慢慢来，不着急","en":"Slowly, without rushing"},"Bonjour":{"mg":"Salama","zh":"你好","en":"Hello"},"Merci":{"mg":"Misaotra","zh":"谢谢","en":"Thank you"},"À bientôt":{"mg":"Mandra-pihaona","zh":"回头见","en":"See you soon"},"La vanille":{"mg":"Ny lavanila","zh":"香草","en":"Vanilla"},"Le safran":{"mg":"Ny safrana","zh":"藏红花","en":"Saffron"},"Le piment d’Espelette":{"mg":"Ny sakay Espelette","zh":"埃斯佩莱特辣椒","en":"Espelette pepper"},"La cannelle de Ceylan":{"mg":"Ny kanely Silaona","zh":"锡兰肉桂","en":"Ceylon cinnamon"},"Le maki catta":{"mg":"Ny maky","zh":"环尾狐猴","en":"Ring-tailed lemur"},"L’aye-aye":{"mg":"Ny aiay","zh":"指猴","en":"Aye-aye"},"Le sifaka":{"mg":"Ny sifaka","zh":"冕狐猴","en":"Sifaka"},"L’indri":{"mg":"Ny indri","zh":"大狐猴","en":"Indri"},"Le microcèbe":{"mg":"Ny lemura voalavo","zh":"鼠狐猴","en":"Mouse lemur"}};
const QP={"mg":{"philosophie":["Iza no nanoratra hoe « Mieritreritra aho, noho izany dia misy aho » ?","Iza no mpampianatra an’i Platon?","Iza no nanoratra ny boky hoe « Ny existansialisma dia humanisma » ?","Filozofa iza no nanoratra ny boky hoe « Ny Repoblika » ?","Iza no nanoratra ny boky hoe « Toy izao no nitenenan’i Zarathoustra » ?","Iza no nanoratra ny boky hoe « Ny Fifanekena ara-piaraha-monina » ?","Iza amin’ireto fomba fisainana ireto no tsy mitovy amin’ny hafa?","Iza no nanoratra ny boky hoe « Fanakianana ny Antony Madio » ?"],"logique":["Firy ny 7 × 8?","Inona no raikipohy simika ny rano?","Andian-tarehimarika: 2, 4, 8, 16, … inona no manaraka?","Inona no isa iray izay, raha ampitomboina amin’ny tenany, dia 144?","Firy ny hafainganan’ny hazavana?","Firy ny sisin’ny sary mizoro enina?","Firy eo ho eo ny sandan’ny π?","Iza no namolavola ny raikipohy E = mc² ?"],"art":["Iza no nanao ny sary hoe « Mona Lisa » ?","Iza no nanao ny sary hoe « Ny Alina feno Kintana » ?","Iza no nanao ny sary hoe « Guernica » ?","Iza no nanao ny sary sokitra hoe « Ny Mpisaina » ?","Ao amin’ny tranombakoka inona no aseho ny Mona Lisa?","Mpanao sary iza no malaza amin’ny sary hoe « Ny Lisy Rano » ?","Iza no namorona ny « Hira ho an’ny Fifaliana » (Simfonia faha-9)?","Iza no nanao ny sary teo amin’ny valindrihan’ny Trano-vavaky Sistina?"],"nature":["Biby inona no tsy hita afa-tsy eto Madagasikara?","Inona no biby lehibe indrindra miaina an-tanety?","Hazo inona no be vatana mivonto ary mariky ny Madagasikara?","Firy ny fon’ny horita?","Entona inona no raisin’ny zavamaniry amin’ny fotosintezy?","Inona no ranomasimbe lehibe indrindra?","Inona no hany biby mampinono afaka manidina tokoa?","Zavamaniry inona no ihavian’ny lavanila?"],"geographie":["Inona ny renivohitr’i Madagasikara?","Inona ny renivohitr’i Japana?","Inona ny renirano lava indrindra any Afrika?","Inona ny vola ampiasaina any Madagasikara?","Inona ny firenena be mponina indrindra any Afrika?","Any amin’ny firenena inona no misy ny Machu Picchu?","Inona ny tendrombohitra avo indrindra eran-tany?","Inona ny nosy lehibe indrindra any Afrika?"],"sport":["Firy ny mpilalao isaky ny ekipa eny an-kianja amin’ny baolina kitra?","Isaky ny firy taona no atao ny Lalao Olympika fahavaratra?","Iza no nandresy tamin’ny Fiadiana ny Amboara eran-tany amin’ny baolina kitra 2022?","Iza no mitana ny firaketana eran-tany amin’ny 100 m (9,58 s)?","Fanatanjahan-tena inona no lalaina any Roland-Garros?","Firy ny halavan’ny marathon?","Fanatanjahan-tena inona no nahatonga an’i Michael Jordan ho malaza?","Firenena iza no nandray ny Lalao Olympika fahavaratra 2016?"],"histoire":["Tamin’ny taona firy no nanomboka ny Revolisiona frantsay?","Iza no filoha voalohany tany Etazonia?","Tamin’ny taona firy no nandeha an-tongotra teo amin’ny Volana ny olombelona?","Sivilizasiona iza no nanorina ny piramida any Gizeh?","Tamin’ny taona firy no nahazo ny fahaleovantena i Madagasikara?","Jenerala avy amin’ny tanàna iza i Jiolio Sezara?","Tamin’ny taona firy no nirodana ny Rindrina Berlin?","Iza no mpanjakavavy farany tao Madagasikara?"],"culture":["Inona ny fiteny nasionalin’i Madagasikara?","Inona no anaran’ilay fombafomba fanodinkodinana ny razana?","Zavamaneno malagasy inona no misy tady ary vita amin’ny volo?","Sakafo inona no heverina ho sakafo nasionalin’i Madagasikara?","Any amin’ny firenena inona no atao ny Karnavaly malaza any Rio?","Fety japoney inona no mankalaza ny voninkazon’ny hazo sakura?","Dihy inona no teraka tany Arzantina?","Iza no nanoratra ny boky hoe « Ny Mahantra » ?"],"madagascar":["Inona ny seranan-tsambo voalohany any Madagasikara?","Hazo inona no malaza eo akaikin’i Morondava?","Toerana inona no malaza amin’ny tsingy?","Inona no loko TSY ao amin’ny sainan’i Madagasikara?","Inona no dikan’ny hoe « Mora mora » ?","Zava-manitra inona no vokarin’i Madagasikara be dia be?","Lemura inona no manana rambo misy peratra mainty sy fotsy?","Inona ny lemura lehibe indrindra velona?"]},"zh":{"philosophie":["谁写了“我思故我在”？","谁是柏拉图的老师？","谁写了《存在主义是一种人道主义》？","哪位哲学家写了《理想国》？","谁写了《查拉图斯特拉如是说》？","谁写了《社会契约论》？","以下哪一种思想流派与其他不同？","谁写了《纯粹理性批判》？"],"logique":["7 × 8 等于多少？","水的化学式是什么？","数列：2、4、8、16、……下一个数是什么？","144 的平方根是多少？","光速是多少？","六边形有几条边？","π 的近似值是多少？","谁提出了 E = mc²？"],"art":["《蒙娜丽莎》是谁画的？","《星月夜》是谁画的？","《格尔尼卡》是谁画的？","《思想者》是谁雕刻的？","《蒙娜丽莎》收藏在哪座博物馆？","哪位画家以《睡莲》系列闻名？","谁创作了《欢乐颂》（第九交响曲）？","谁绘制了西斯廷教堂的天花板？"],"nature":["哪种动物是马达加斯加特有的？","陆地上最大的动物是什么？","哪种树干膨大的树是马达加斯加的标志？","章鱼有几颗心脏？","植物进行光合作用时吸收哪种气体？","世界上最大的海洋是什么？","哪种哺乳动物能够真正主动飞行？","香草来自哪种植物？"],"geographie":["马达加斯加的首都是什么？","日本的首都是什么？","非洲最长的河流是哪一条？","马达加斯加使用什么货币？","非洲人口最多的国家是哪个？","马丘比丘位于哪个国家？","世界上最高的山是什么？","非洲最大的岛屿是什么？"],"sport":["足球比赛中每队有多少名场上球员？","夏季奥运会每隔几年举办一次？","哪支球队赢得了 2022 年世界杯足球赛？","谁保持着男子 100 米世界纪录（9.58 秒）？","罗兰·加洛斯网球公开赛属于哪项运动？","马拉松的标准距离是多少？","哪项运动让迈克尔·乔丹闻名？","哪个国家举办了 2016 年夏季奥运会？"],"histoire":["法国大革命始于哪一年？","谁是美国第一任总统？","人类在哪一年首次登上月球？","哪个文明建造了吉萨金字塔？","马达加斯加在哪一年独立？","尤利乌斯·凯撒是哪座城邦的将军？","柏林墙在哪一年倒塌？","谁是马达加斯加最后一位女王？"],"culture":["马达加斯加的国家语言是什么？","马达加斯加的翻尸仪式叫什么？","哪种马达加斯加乐器是用竹子制作的管状齐特琴？","哪道菜被视为马达加斯加的代表性国菜？","著名的里约狂欢节在哪个国家举行？","日本哪个节日庆祝樱花盛开？","哪种舞蹈起源于阿根廷？","谁写了《悲惨世界》？"],"madagascar":["马达加斯加最主要的港口是哪一个？","莫隆达瓦附近以哪种树闻名？","哪个景点以“针状石林”地貌闻名？","马达加斯加国旗上没有哪种颜色？","“mora mora”这句马达加斯加语是什么意思？","马达加斯加大量生产哪种香料？","哪种狐猴有黑白相间的环纹尾巴？","现存体型最大的狐猴是哪一种？"]},"en":{"philosophie":["Who wrote “I think, therefore I am”?","Who was Plato’s teacher?","Who wrote “Existentialism Is a Humanism”?","Which philosopher wrote “The Republic”?","Who wrote “Thus Spoke Zarathustra”?","Who wrote “The Social Contract”?","Which of these schools of thought is the odd one out?","Who wrote “Critique of Pure Reason”?"],"logique":["What is 7 × 8?","What is the chemical formula for water?","Number sequence: 2, 4, 8, 16, …?","What is the square root of 144?","What is the speed of light?","How many sides does a hexagon have?","What is the approximate value of π?","Who formulated E = mc²?"],"art":["Who painted the Mona Lisa?","Who painted “The Starry Night”?","Who painted “Guernica”?","Who sculpted “The Thinker”?","In which museum is the Mona Lisa displayed?","Which painter is famous for “Water Lilies”?","Who composed “Ode to Joy” (Symphony No. 9)?","Who painted the ceiling of the Sistine Chapel?"],"nature":["Which animal is endemic to Madagascar?","What is the largest land animal?","Which tree with a swollen trunk is iconic in Madagascar?","How many hearts does an octopus have?","Which gas do plants absorb during photosynthesis?","What is the largest ocean?","Which mammal is capable of true powered flight?","Which plant does vanilla come from?"],"geographie":["What is the capital of Madagascar?","What is the capital of Japan?","What is the longest river in Africa?","What is the currency of Madagascar?","Which country has the largest population in Africa?","In which country is Machu Picchu located?","What is the highest mountain in the world?","What is the largest island in Africa?"],"sport":["How many players per team are on the football pitch?","How often are the Summer Olympic Games held?","Who won the 2022 FIFA World Cup?","Who holds the 100 m world record (9.58 seconds)?","Which sport is played at Roland-Garros?","How long is a marathon?","Which sport made Michael Jordan famous?","Which country hosted the 2016 Summer Olympics?"],"histoire":["In what year did the French Revolution begin?","Who was the first president of the United States?","In what year did humans first walk on the Moon?","Which civilization built the Pyramids of Giza?","In what year did Madagascar become independent?","Julius Caesar was a general from which city?","In what year did the Berlin Wall fall?","Who was the last queen of Madagascar?"],"culture":["What is the national language of Madagascar?","What is the Malagasy ceremony of turning the dead called?","Which Malagasy instrument is a bamboo tube zither?","Which dish is considered a national dish of Madagascar?","Which country hosts the famous Rio Carnival?","Which Japanese festival celebrates cherry blossoms?","Which dance originated in Argentina?","Who wrote “Les Misérables”?"],"madagascar":["What is the main port of Madagascar?","Which trees are famous near Morondava?","Which site is famous for its tsingy limestone formations?","Which colour is NOT on the Malagasy flag?","What does “mora mora” mean?","Which spice is Madagascar a major producer of?","Which lemur has a black-and-white ringed tail?","What is the largest living lemur?"]}};
const X=f=>{const r=DICT[f];return r&&LANG!=="fr"?r[LANG]:f};
const optX=a=>{const r=OPT[a];return r&&LANG!=="fr"?r[LANG]:a};
function greetTxt(){const h=new Date().getHours(),k=h>=22||h<5?0:h<12?1:h<18?2:3,t=TX[LANG];return t.g[k]+(LANG==="fr"?" ! ":LANG==="zh"?"！":"! ")+"👋 "+t.w}


/* =====================================================================
   🎵 RADIO 80's + EFFETS SONORES  (objet AUD)
   - Musique : si CONF.musique est vide, une mini-radio synthétique (basse, arpège,
     batterie, delay façon années 80) est jouée par l'API WebAudio, en boucle.
     Sinon c'est ton fichier mp3 (CONF.musique) qui tourne en boucle.
   - Bouton lecture/pause + curseur de volume (#rp et #rv dans le HTML).
   - Volume à 0  => la musique se met en pause. En remontant le volume, elle reprend.
   - Appuyer sur lecture alors que le volume est à 0 remet le volume à 40 %.
   - Les sons (clic, ok, ko…) suivent le même volume ; volume 0 = silence total.
   ===================================================================== */
const AUD=(()=>{
  let ctx,master,bus,noiseBuf,timer=null,step=0,nextT=0,fileEl=null,want=false;
  let vol=Math.min(1,Math.max(0,(CONF.volume??40)/100));
  try{const sv=localStorage.getItem("ikz-vol");if(sv!==null)vol=Math.min(1,Math.max(0,+sv))}catch(e){}
  const BPM=108,SP=60/BPM/4,mf=m=>440*Math.pow(2,(m-69)/12);   // SP = durée d'une double-croche
  const CH=[[57,60,64],[53,57,60],[55,60,64],[55,59,62]],BASS=[33,29,36,31]; // accords Am – F – C – G (notes MIDI)
  const playing=()=>want&&vol>0;          // la musique joue seulement si voulue ET volume > 0
  const save=()=>{try{localStorage.setItem("ikz-vol",vol)}catch(e){}};
  function init(){                        // crée le moteur audio (au 1er geste du visiteur)
    if(ctx)return true;
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;
    ctx=new AC();master=ctx.createGain();master.gain.value=vol;master.connect(ctx.destination);
    bus=ctx.createGain();bus.gain.value=.55;bus.connect(master);
    const dl=ctx.createDelay(1),fb=ctx.createGain(),wet=ctx.createGain();   // petit écho 80's
    dl.delayTime.value=SP*3;fb.gain.value=.3;wet.gain.value=.25;
    bus.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(wet);wet.connect(master);
    noiseBuf=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);
    const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
    return true;
  }
  function tone(f,t,dur,type,g,lp,dest){  // une note : oscillateur + filtre + enveloppe
    const o=ctx.createOscillator(),a=ctx.createGain(),fl=ctx.createBiquadFilter();
    o.type=type;o.frequency.value=f;fl.type="lowpass";fl.frequency.value=lp;
    a.gain.setValueAtTime(0,t);a.gain.linearRampToValueAtTime(g,t+.01);a.gain.exponentialRampToValueAtTime(.0001,t+dur);
    o.connect(fl);fl.connect(a);a.connect(dest||bus);o.start(t);o.stop(t+dur+.05);
  }
  function noise(t,dur,hp,g){             // caisse claire / charleston
    const s=ctx.createBufferSource(),a=ctx.createGain(),f=ctx.createBiquadFilter();
    s.buffer=noiseBuf;f.type="highpass";f.frequency.value=hp;
    a.gain.setValueAtTime(g,t);a.gain.exponentialRampToValueAtTime(.0001,t+dur);
    s.connect(f);f.connect(a);a.connect(bus);s.start(t);s.stop(t+dur+.02);
  }
  function kick(t){                       // grosse caisse
    const o=ctx.createOscillator(),a=ctx.createGain();
    o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(40,t+.15);
    a.gain.setValueAtTime(.9,t);a.gain.exponentialRampToValueAtTime(.0001,t+.25);
    o.connect(a);a.connect(bus);o.start(t);o.stop(t+.3);
  }
  function beat(s,t){                     // joue la double-croche n° s (0 à 63) à l'instant t
    const bar=Math.floor(s/16)%4,k=s%16,ch=CH[bar];
    if(k===0||k===8||k===10)kick(t);
    if(k===4||k===12){noise(t,.18,1500,.5);tone(190,t,.1,"triangle",.3,2000)}
    if(k%2===0)noise(t,k%4===2?.12:.04,7000,.18);
    if(k%2===0)tone(mf(BASS[bar]+(k%8===6?12:0)),t,SP*1.8,"sawtooth",.28,500);        // basse
    tone(mf(ch[k%3]+(k%8>=4?12:0)),t,SP*1.2,"square",.06,2600);                        // arpège
    if(k===0)ch.forEach(m=>tone(mf(m-12),t,SP*15,"sawtooth",.04,900));                 // nappe
  }
  function tick(){while(nextT<ctx.currentTime+.15){beat(step,nextT);nextT+=SP;step=(step+1)%64}}
  function startSynth(){if(!init())return;ctx.resume();if(timer)return;nextT=ctx.currentTime+.05;timer=setInterval(tick,40)}
  function stopSynth(){clearInterval(timer);timer=null}
  function startFile(){                   // mode « mon fichier mp3 »
    if(!fileEl){fileEl=new Audio(CONF.musique);fileEl.loop=true;
      fileEl.onerror=()=>{CONF.musique="";fileEl=null;if(playing())startSynth()}}   // fichier introuvable => radio synthétique
    fileEl.volume=vol;fileEl.play().catch(()=>{});
  }
  function ui(){                          // met à jour boutons / icônes / curseur
    $("rp").innerHTML='<i class="fa-solid fa-'+(playing()?"pause":"play")+'"></i>';
    $("ri").innerHTML='<i class="fa-solid fa-volume-'+(vol===0?"xmark":vol<.4?"low":"high")+'"></i>';
    $("rv").value=Math.round(vol*100);$("radio").classList.toggle("on",playing());
  }
  function sync(){                        // applique volume + état lecture/pause
    if(ctx)master.gain.value=vol;if(fileEl)fileEl.volume=vol;
    if(playing()){CONF.musique?startFile():startSynth()}else{stopSynth();if(fileEl)fileEl.pause()}
    ui();
  }
  function synthSfx(n){                   // petits bips quand aucun fichier n'est fourni
    if(!init())return;ctx.resume();const t=ctx.currentTime;
    ({clic:[[880,0,.05]],ok:[[660,0,.1],[990,.09,.18]],ko:[[220,0,.16],[165,.14,.24]],
      gagne:[[523,0,.12],[659,.12,.12],[784,.24,.12],[1047,.36,.3]],fin:[[392,0,.14],[330,.14,.14],[262,.28,.3]]}[n]||[])
      .forEach(([f,d,l])=>tone(f,t+d,l,"square",.12,3000,master));
  }
  function sfx(n){                        // joue le son « n » (clic, ok, ko, gagne, fin)
    if(vol<=0)return;
    const p=(CONF.sons||{})[n];
    if(p){const a=new Audio(p);a.volume=vol;a.onerror=()=>synthSfx(n);a.play().catch(()=>{});return}
    synthSfx(n);
  }
  document.addEventListener("visibilitychange",()=>{if(document.hidden){stopSynth();if(fileEl)fileEl.pause()}else sync()});  // pause si l'onglet est caché
  if(CONF.autoplay)addEventListener("pointerdown",()=>{want=true;sync()},{once:true});
  return{
    toggle(){if(playing())want=false;else{want=true;if(vol===0){vol=.4;save()}}sync()},   // bouton lecture / pause
    setVol(v){vol=Math.min(1,Math.max(0,v/100));save();sync()},                            // curseur de volume
    sfx,ui
  };
})();
$("rp").addEventListener("click",()=>AUD.toggle());
$("rv").addEventListener("input",e=>AUD.setVol(+e.target.value));
AUD.ui();

/* 🎨 THÈMES : nuit, sombre, jour clair (nuages + soleil), jour sombre (pluie) — bouton en haut à droite *//* Thème Nuit / Sombre */
const root=document.documentElement;
const TH=[["nuit","Nuit","fa-moon"],["sombre","Sombre","fa-circle-half-stroke"],["clair","Jour clair","fa-sun"],["pluie","Jour sombre","fa-cloud-rain"]];
function theme(t){const x=TH.find(a=>a[0]===t)||TH[0];root.dataset.theme=x[0];$("tname").textContent=X(x[1]);$("ticon").innerHTML=`<i class="fa-solid ${x[2]}"></i>`;try{localStorage.setItem("ikz-theme",x[0])}catch(e){}}
try{theme(localStorage.getItem("ikz-theme")||"nuit")}catch(e){}
$("theme").addEventListener("click",()=>theme(TH[(TH.findIndex(a=>a[0]===root.dataset.theme)+1)%4][0]));
/* Météo : nuages, soleil, pluie */
const wx=$("wx");wx.innerHTML='<i class="sun"></i>';
for(let i=0;i<6;i++){const c=document.createElement("i");c.className="cloud";c.style.cssText=`--w:${160+Math.random()*180}px;top:${3+Math.random()*40}%;animation-duration:${50+Math.random()*50}s;animation-delay:-${Math.random()*80}s`;wx.appendChild(c)}
for(let i=0;i<70;i++){const d=document.createElement("i");d.className="drop";d.style.cssText=`left:${Math.random()*105}%;animation-duration:${.6+Math.random()*.6}s;animation-delay:-${Math.random()}s`;wx.appendChild(d)}

/* Ciel étoilé animé */
function stars(el,n,shape){
  for(let i=0;i<n;i++){
    const s=document.createElement("i"),z=shape?8+Math.random()*10:1+Math.random()*2;
    s.className="star"+(shape?" sh":"")+(Math.random()<.3?" c":"");
    s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${2+Math.random()*4}s,${6+Math.random()*8}s${shape?","+(8+Math.random()*14)+"s":""};animation-delay:-${Math.random()*8}s`;
    el.appendChild(s);
  }
}
stars($("skyFar"),90,false);stars($("skyNear"),24,true);
for(let i=0;i<3;i++){const s=document.createElement("i");s.className="shoot";s.style.cssText=`left:${55+Math.random()*40}%;top:${Math.random()*35}%;animation-duration:${9+i*5}s;animation-delay:${i*3}s`;$("skyNear").appendChild(s)}

/* KOTO : 18 émotions (stickers découpés, fond transparent) — ok point think cheer sad shock code peace fight hi sleep love clap laugh wink cry wow calm */
const EMO={ok:"koto-ok.webp",point:"koto-point.webp",think:"koto-think.webp",cheer:"koto-cheer.webp",sad:"koto-sad.webp",shock:"koto-shock.webp",code:"koto-code.webp",peace:"koto-peace.webp",fight:"koto-fight.webp",hi:"koto-hi.webp",sleep:"koto-sleep.webp",love:"koto-love.webp",clap:"koto-clap.webp",laugh:"koto-laugh.webp",wink:"koto-wink.webp",cry:"koto-cry.webp",wow:"koto-wow.webp",calm:"koto-calm.webp"};
Object.values(EMO).forEach(u=>{const i=new Image();i.src=u});   // précharge : pas de clignotement au changement d’émotion
const SE=["hi","wink","think","point","love","cheer","ok","code"];   // émotion de KOTO par page
function emo(el,k){if(el&&EMO[k])el.style.backgroundImage="url("+EMO[k]+")"}
function me(k){emo(document.querySelector("#modal .lemur"),k)}
document.querySelectorAll(".lemur").forEach(l=>emo(l,"calm"));

/* Images de catégories : icône Font Awesome si absente */
document.addEventListener("error",e=>{const t=e.target;if(t.tagName==="IMG"&&t.dataset.fa){const s=document.createElement("span");s.className="em";s.innerHTML=`<i class="fa-solid ${t.dataset.fa}"></i>`;t.replaceWith(s)}},true);

/* Dialogue (machine à écrire) */
async function type(el,txt){el.classList.add("typing");el.textContent="";for(const c of txt){el.textContent+=c;await wait(16)}el.classList.remove("typing");const cur=el.dataset.say!==undefined?el.dataset.say:el.dataset.live;if(cur!==undefined&&cur!==txt)el.textContent=cur}

/* Pages + bouton Suivant */
const S=[...document.querySelectorAll(".slide")],prev=$("prev"),next=$("next");
let cur=0;
S.forEach(s=>s.querySelectorAll(".item").forEach((el,i)=>el.style.setProperty("--d",(.12+i*.12)+"s")));
S.forEach((s,i)=>{const d=document.createElement("button");d.className="dot";d.title=s.dataset.t;d.setAttribute("aria-label",s.dataset.t);d.onclick=()=>go(i);$("dots").appendChild(d)});
async function enter(s){
  if(s.dataset.done)return;s.dataset.done=1;
  for(const b of s.querySelectorAll(".say")){await type(b,b.dataset.say);await wait(200)}
  if(s===S[0])$("choices").hidden=false;
}
function fit(){const s=S[cur];s.classList.remove("scroll");s.classList.toggle("scroll",s.scrollHeight>s.clientHeight+4)}
function go(n){
  if(n<0||n>=S.length||n===cur)return;
  S.forEach((s,i)=>{s.classList.toggle("active",i===n);s.classList.toggle("before",i<n)});
  cur=n;
  [...$("dots").children].forEach((d,i)=>d.classList.toggle("on",i===n));
  prev.disabled=n===0;next.disabled=n===S.length-1;next.classList.remove("pulse");
  $("skyFar").style.transform=`translateX(${-n*25}px)`;$("skyNear").style.transform=`translateX(${-n*55}px)`;
  document.body.classList.add("warp");setTimeout(()=>document.body.classList.remove("warp"),900);
  S[n].querySelectorAll(".lemur").forEach(l=>emo(l,SE[n]||"calm"));enter(S[n]);fit();
}
prev.onclick=()=>go(cur-1);next.onclick=()=>go(cur+1);
$("dots").children[0].classList.add("on");prev.disabled=true;{const b0=document.querySelector("#deck .say");b0.dataset.say=greetTxt();b0.dataset.greet=1}emo(S[0].querySelector(".lemur"),"hi");enter(S[0]);
addEventListener("keydown",e=>{if(/INPUT|TEXTAREA/.test(e.target.tagName))return;if(e.key==="ArrowRight")go(cur+1);if(e.key==="ArrowLeft")go(cur-1)});
addEventListener("resize",fit);
let x0=null;const deck=$("deck");
deck.addEventListener("touchstart",e=>{x0=e.target.closest(".hscroll,input,textarea")?null:e.touches[0].clientX},{passive:true});
deck.addEventListener("touchend",e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>60)go(cur+(d<0?1:-1));x0=null});

/* 💬 Réponses de la 1re page (Oui / Non / Qui es-tu KOTO ?) : le texte est dans data-r du HTML *//* Réponses de l’accueil */
const HINTS=["Touche : le savais-tu ?","Touche : lance la démo","Touche : vois la ligue","Touche : vois tes mérites"];
let REPLY=null;
document.querySelectorAll("#choices .btn").forEach(b=>{b.dataset.rf=b.dataset.r||"";b.addEventListener("click",async()=>{
  if(b.dataset.act)return;const keep=b.hasAttribute("data-keep"),kr=$("kotoR");
  REPLY={b};$("mine").textContent=b.textContent;if(keep)b.hidden=true;else $("choices").hidden=true;
  await wait(400);kr.dataset.live=X(b.dataset.rf);await type(kr,kr.dataset.live);if(!keep)next.classList.add("pulse");fit();
})});

/* Mini quiz */
/* 🎯 Mini-quiz de la page « Essayer » : q = question, a = réponses (en français, traduites à l'affichage), c = n° (0,1,2) de la bonne, f = phrase de KOTO */
const Q=[
 {q:{fr:"Quelle est la capitale de Madagascar ?",mg:"Inona ny renivohitr’i Madagasikara?",zh:"马达加斯加的首都是哪里？",en:"What is the capital of Madagascar?"},a:["Toamasina","Antananarivo","Mahajanga","Antsirabe"],c:1,f:{fr:"Antananarivo, la ville des Mille ! 🏙️",mg:"Antananarivo, ny tanànan’ny Arivo! 🏙️",zh:"塔那那利佛，千人之城！🏙️",en:"Antananarivo, the City of the Thousand! 🏙️"}},
 {q:{fr:"Quel animal est emblématique et endémique de Madagascar ?",mg:"Biby inona no mariky ny Madagasikara ary tsy hita afa-tsy eto?",zh:"哪种动物是马达加斯加的象征，也是当地特有的？",en:"Which animal is emblematic and endemic to Madagascar?"},a:["Le lémurien","Le panda","Le koala","Le tigre"],c:0,f:{fr:"Les lémuriens vivent à l’état sauvage uniquement à Madagascar. 🐒",mg:"Eto Madagasikara ihany no misy lemura velona an’ala. 🐒",zh:"狐猴只在马达加斯加的野外生存。🐒",en:"Lemurs live in the wild only in Madagascar. 🐒"}},
 {q:{fr:"Combien font 7 × 8 ?",mg:"Firy ny 7 × 8?",zh:"7 × 8 等于多少？",en:"What is 7 × 8?"},a:["54","56","64","63"],c:1,f:{fr:"7 × 8 = 56. Logique ! 🧮",mg:"7 × 8 = 56. Lojika tokoa! 🧮",zh:"7 × 8 = 56。很合逻辑！🧮",en:"7 × 8 = 56. Logical! 🧮"}}
];
let MI;
function mt(){clearInterval(MI);let t=CONF.duree;const b=$("mtb");b.style.width="100%";b.classList.remove("low");MI=setInterval(()=>{t-=.1;b.style.width=Math.max(t,0)/CONF.duree*100+"%";b.classList.toggle("low",t<5);if(t<=0){clearInterval(MI);document.querySelectorAll("#a .ans").forEach(x=>x.disabled=true);$("a").children[Q[n].c].classList.add("ok");$("fb").textContent=T4("Temps écoulé ! ","Lany ny fotoana! ","时间到！","Time’s up! ")+P(Q[n].f);setTimeout(()=>{n=(n+1)%Q.length;show()},2200)}},100)}
let n=0;
function show(){
  const k=Q[n];$("q").textContent=P(k.q);$("fb").textContent="";$("a").innerHTML="";mt();
  k.a.map(optX).forEach((t,i)=>{
    const b=document.createElement("button");b.className="ans";b.textContent=t;
    b.onclick=()=>{
      document.querySelectorAll(".ans").forEach(x=>x.disabled=true);
      b.classList.add(i===k.c?"ok":"ko");AUD.sfx(i===k.c?"ok":"ko");if(i!==k.c)$("a").children[k.c].classList.add("ok");
      $("fb").textContent=(i===k.c?T4("Bravo ! ","Arahaba! ","太棒了！","Well done! "):T4("Oups ! ","Indrisy! ","哎呀！","Oops! "))+P(k.f);
      clearInterval(MI);setTimeout(()=>{n=(n+1)%Q.length;show()},2200);fit();
    };
    $("a").appendChild(b);
  });
}
show();

/* ✉️ CONTACT : ouvre l'app mail du visiteur vers CONF.email ; les icônes utilisent les liens de CONF *//* Contact : mail direct + réseaux */
document.querySelectorAll("[data-net]").forEach(a=>a.href=CONF[a.dataset.net]);
$("mail").onsubmit=e=>{
  e.preventDefault();const m=$("msg").value.trim();if(!m)return;const nm=$("nm").value.trim();
  const a=document.createElement("a");
  a.href="mailto:"+CONF.email+"?subject="+encodeURIComponent(X("Message depuis le site IKOIZANA")+(nm?" – "+nm:""))+"&body="+encodeURIComponent(m+(nm?"\n\n"+nm:""));
  document.body.appendChild(a);a.click();a.remove();
  $("mfb").textContent=X("Ton application mail s’ouvre… Sinon écris à ")+CONF.email;
};
/* ===== Démo interactive : KOTO, quiz, "Le savais-tu ?", ligue, mérites ===== */
/* =====================================================================
   ❓ QUESTIONS DE LA DÉMO — 8 catégories, 8 questions chacune.
   Format : ["Question ?","BONNE réponse","mauvaise 1","mauvaise 2","mauvaise 3"]
   👉 La bonne réponse est toujours en PREMIER (le code mélange les réponses).
   ===================================================================== */
const CATS={
philosophie:{col:"#7986cb",n:"Philosophie",ic:"fa-book-open",q:[["Qui a écrit « Je pense, donc je suis » ?","Descartes","Platon","Kant","Nietzsche"],["Qui fut le maître de Platon ?","Socrate","Aristote","Épicure","Diogène"],["Qui a écrit « L’existentialisme est un humanisme » ?","Sartre","Camus","Voltaire","Rousseau"],["Quel philosophe a écrit « La République » ?","Platon","Aristote","Hobbes","Locke"],["Qui a écrit « Ainsi parlait Zarathoustra » ?","Nietzsche","Hegel","Spinoza","Marx"],["Qui a écrit « Le Contrat social » ?","Rousseau","Montesquieu","Diderot","Pascal"],["Quel est l’intrus parmi ces courants ?","Impressionnisme","Stoïcisme","Épicurisme","Scepticisme"],["Qui a écrit « Critique de la raison pure » ?","Kant","Hume","Leibniz","Schopenhauer"]]},
logique:{col:"#5e9bf7",n:"Logique",ic:"fa-calculator",q:[["Combien font 7 × 8 ?","56","54","58","64"],["Quelle est la formule de l’eau ?","H₂O","CO₂","O₂","NaCl"],["Suite : 2, 4, 8, 16, … ?","32","24","30","64"],["Quelle est la racine carrée de 144 ?","12","14","11","16"],["Quelle est la vitesse de la lumière ?","300 000 km/s","30 000 km/s","3 000 km/s","3 000 000 km/s"],["Combien de côtés a un hexagone ?","6","5","7","8"],["Que vaut π environ ?","3,14","2,71","1,62","3,41"],["Qui a formulé E = mc² ?","Einstein","Newton","Galilée","Tesla"]]},
art:{col:"#ec407a",n:"Art",ic:"fa-palette",q:[["Qui a peint la Joconde ?","Léonard de Vinci","Michel-Ange","Raphaël","Botticelli"],["Qui a peint « La Nuit étoilée » ?","Van Gogh","Monet","Picasso","Dalí"],["Qui a peint « Guernica » ?","Picasso","Dalí","Miró","Matisse"],["Qui a sculpté « Le Penseur » ?","Rodin","Michel-Ange","Donatello","Bernin"],["Dans quel musée est exposée la Joconde ?","Le Louvre","Le Prado","L’Ermitage","Le MoMA"],["Quel peintre est célèbre pour « Les Nymphéas » ?","Monet","Renoir","Manet","Degas"],["Qui a composé l’« Ode à la joie » (9e symphonie) ?","Beethoven","Mozart","Bach","Chopin"],["Qui a peint le plafond de la chapelle Sixtine ?","Michel-Ange","Raphaël","Léonard de Vinci","Titien"]]},
nature:{col:"#9ccc65",n:"Nature",ic:"fa-leaf",q:[["Quel animal est endémique de Madagascar ?","Le lémurien","Le panda","Le koala","Le tigre"],["Quel est le plus grand animal terrestre ?","L’éléphant d’Afrique","La girafe","Le rhinocéros","L’hippopotame"],["Quel arbre au tronc renflé est emblématique de Madagascar ?","Le baobab","Le chêne","Le palmier","Le sapin"],["Combien de cœurs a une pieuvre ?","3","1","2","4"],["Quel gaz les plantes absorbent-elles pour la photosynthèse ?","Le dioxyde de carbone","L’oxygène","L’azote","L’hélium"],["Quel est le plus grand océan ?","Le Pacifique","L’Atlantique","L’Indien","L’Arctique"],["Quel est le seul mammifère capable de vrai vol ?","La chauve-souris","L’écureuil volant","Le colibri","Le paresseux"],["De quelle plante vient la vanille ?","Une orchidée","La canne à sucre","Le palmier","Le cacaoyer"]]},
geographie:{col:"#26c6da",n:"Géographie",ic:"fa-earth-africa",q:[["Quelle est la capitale de Madagascar ?","Antananarivo","Toamasina","Antsirabe","Mahajanga"],["Quelle est la capitale du Japon ?","Tokyo","Kyoto","Osaka","Séoul"],["Quel est le plus long fleuve d’Afrique ?","Le Nil","Le Congo","Le Niger","Le Zambèze"],["Quelle est la monnaie de Madagascar ?","L’ariary","Le franc CFA","Le shilling","Le rand"],["Quel est le pays le plus peuplé d’Afrique ?","Le Nigeria","L’Éthiopie","L’Égypte","L’Afrique du Sud"],["Dans quel pays se trouve le Machu Picchu ?","Le Pérou","Le Mexique","La Bolivie","Le Chili"],["Quelle est la plus haute montagne du monde ?","L’Everest","Le K2","Le Mont Blanc","Le Kilimandjaro"],["Quelle est la plus grande île d’Afrique ?","Madagascar","Zanzibar","Maurice","Sao Tomé"]]},
sport:{col:"#4caf50",n:"Sport",ic:"fa-futbol",q:[["Combien de joueurs par équipe sur le terrain au football ?","11","10","9","12"],["Tous les combien d’années ont lieu les JO d’été ?","4 ans","2 ans","3 ans","5 ans"],["Qui a gagné la Coupe du monde de football 2022 ?","L’Argentine","La France","Le Brésil","La Croatie"],["Qui détient le record du monde du 100 m (9,58 s) ?","Usain Bolt","Carl Lewis","Justin Gatlin","Tyson Gay"],["Quel sport se joue à Roland-Garros ?","Le tennis","Le golf","Le cyclisme","Le rugby"],["Quelle est la distance d’un marathon ?","42,195 km","21 km","50 km","36 km"],["Quel sport a rendu célèbre Michael Jordan ?","Le basket-ball","Le baseball","Le football américain","Le tennis"],["Quel pays a accueilli les JO d’été 2016 ?","Le Brésil","La Chine","Le Royaume-Uni","La Grèce"]]},
histoire:{col:"#c97b3e",n:"Histoire",ic:"fa-landmark",q:[["En quelle année a débuté la Révolution française ?","1789","1776","1804","1815"],["Qui fut le premier président des États-Unis ?","George Washington","Abraham Lincoln","Thomas Jefferson","John Adams"],["En quelle année l’homme a-t-il marché sur la Lune ?","1969","1961","1972","1957"],["Quelle civilisation a bâti les pyramides de Gizeh ?","L’Égypte antique","Les Mayas","Les Romains","Les Grecs"],["En quelle année Madagascar est-elle devenue indépendante ?","1960","1947","1975","1958"],["Jules César était un général de quelle cité ?","Rome","Athènes","Carthage","Sparte"],["En quelle année le mur de Berlin est-il tombé ?","1989","1991","1985","1979"],["Qui fut la dernière reine de Madagascar ?","Ranavalona III","Ranavalona Ire","Rasoherina","Rabodo"]]},
culture:{col:"#ab47bc",n:"Culture",ic:"fa-masks-theater",q:[["Quelle est la langue nationale de Madagascar ?","Le malgache","Le swahili","Le créole","L’arabe"],["Comment s’appelle la cérémonie du « retournement des morts » ?","Famadihana","Fandroana","Alahamadibe","Hira gasy"],["Quel instrument malgache est une cithare en bambou ?","La valiha","Le djembé","La kora","Le sitar"],["Quel plat est considéré comme national à Madagascar ?","Le romazava","Le couscous","La paella","Le ndolé"],["Dans quel pays se tient le célèbre carnaval de Rio ?","Le Brésil","L’Espagne","Le Mexique","L’Italie"],["Quelle fête japonaise célèbre les cerisiers en fleurs ?","Hanami","Diwali","Holi","Obon"],["Quelle danse est née en Argentine ?","Le tango","La salsa","La samba","Le flamenco"],["Qui a écrit « Les Misérables » ?","Victor Hugo","Émile Zola","Balzac","Molière"]]},
madagascar:{col:"#ff7043",n:"Madagascar",ic:"fa-location-dot",q:[["Quel est le premier port de Madagascar ?","Toamasina","Antsiranana","Nosy Be","Morondava"],["Quel arbre est célèbre près de Morondava ?","Les baobabs","Les palmiers","Les cocotiers","Les eucalyptus"],["Quel site est célèbre pour ses tsingy ?","Bemaraha","Isalo","Ranomafana","Andasibe"],["Quelle couleur n’est PAS dans le drapeau malgache ?","Le bleu","Le blanc","Le rouge","Le vert"],["Que signifie « Mora mora » ?","Doucement, sans se presser","Bonjour","Merci","À bientôt"],["Quelle épice Madagascar produit-elle en grande quantité ?","La vanille","Le safran","Le piment d’Espelette","La cannelle de Ceylan"],["Quel lémurien a une queue rayée noir et blanc ?","Le maki catta","L’aye-aye","Le sifaka","L’indri"],["Quel est le plus grand lémurien vivant ?","L’indri","Le maki catta","L’aye-aye","Le microcèbe"]]}
};
const QFR=JSON.parse(JSON.stringify(Object.fromEntries(Object.entries(CATS).map(([k,c])=>[k,c.q])))),CATFR=Object.fromEntries(Object.entries(CATS).map(([k,c])=>[k,c.n]));
/* 💡 « LE SAIS-TU ? » : pour chaque langue : ["titre qui s'affiche","réponse révélée au clic"] */
const FACTS=[
 {fr:["Pourquoi le ciel est bleu ?","La lumière du Soleil est diffusée par l’air : le bleu, de courte longueur d’onde, est dispersé bien plus que le rouge (diffusion de Rayleigh)."],
  mg:["Nahoana no manga ny lanitra?","Ny hazavan’ny Masoandro dia miparitaka rehefa mitsambikina amin’ny rivotra: ny loko manga, izay fohy ny halavan’ny onjany, dia miparitaka lavitra noho ny mena (fiparitahan’i Rayleigh)."],
  zh:["天空为什么是蓝色的？","阳光被空气散射：波长较短的蓝光，比红光被散射得多得多（瑞利散射）。"],
  en:["Why is the sky blue?","Sunlight is scattered by the air: blue light, with its short wavelength, is scattered far more than red (Rayleigh scattering)."]},
 {fr:["Madagascar, une île à part","Séparée de l’Afrique depuis des dizaines de millions d’années, elle abrite une immense part de faune et de flore introuvables ailleurs, dont tous les lémuriens."],
  mg:["Madagasikara, nosy miavaka","Misaraka amin’i Afrika nandritra ny am-polony tapitrisa taona izy, ka mitahiry biby sy zavamaniry maro tsy hita any an-kafa, anisan’izany ny lemura rehetra."],
  zh:["马达加斯加，与众不同的岛屿","它与非洲大陆分离已有数千万年，孕育了大量别处找不到的动植物，所有狐猴都生活在这里。"],
  en:["Madagascar, an island apart","Separated from Africa for tens of millions of years, it is home to a huge share of wildlife and plants found nowhere else, including all lemurs."]},
 {fr:["Le miel ne périme presque jamais","Très peu d’eau et très acide : les bactéries n’y survivent pas. Du miel vieux de plusieurs millénaires a été retrouvé en bon état."],
  mg:["Saika tsy simba ny tantely","Latsaka dia latsaka ny rano ao aminy ary be asidra izy: tsy mahavelona ny bakteria. Nisy tantely efa an-arivony taona maro no hita mbola tsara."],
  zh:["蜂蜜几乎不会变质","蜂蜜含水量极低且酸性很强，细菌无法存活。人们曾发现有数千年历史的蜂蜜，依然完好。"],
  en:["Honey almost never spoils","It contains very little water and is very acidic, so bacteria can’t survive in it. Honey several thousand years old has been found in good condition."]},
 {fr:["Le bateau de Thésée","Si on remplace une à une toutes les pièces d’un bateau, est-ce encore le même ? Un célèbre paradoxe philosophique sur l’identité."],
  mg:["Ny sambon’i Tezeo","Raha soloina tsirairay avy ny sombin-javatra rehetra amin’ny sambo iray, mbola io ihany ve izy? Fanontaniana filozofika malaza momba ny maha-izy ny zavatra."],
  zh:["忒修斯之船","如果把一艘船的所有部件逐一替换，它还是原来那艘船吗？这是一个关于“同一性”的著名哲学悖论。"],
  en:["The Ship of Theseus","If you replace every part of a ship one by one, is it still the same ship? A famous philosophical paradox about identity."]}
];
const M=$("modal"),MB=$("mbody"),sh=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
let MR=null,LASTSAY=null;      /* MR = « redessine la fenêtre ouverte » (appelé quand on change de langue) */
const mOpen=()=>{M.classList.add("on");me("hi")},mShut=()=>{M.classList.remove("on");MR=null;if(G){clearInterval(G.iv);G.stop=1}};
let typ=0,G;
async function mSay(t,now){const s=typeof t==="function"?t():t;LASTSAY=t;const el=$("mb"),id=++typ;if(now){el.classList.remove("typing");el.textContent=s;return}el.classList.add("typing");el.textContent="";for(const c of s){if(id!==typ)return;el.textContent+=c;await wait(12)}el.classList.remove("typing")}
function mBtns(l,keep){
  if(!keep)MB.innerHTML="";
  l.forEach(([t,f,c])=>{const link=typeof f==="string",b=document.createElement(link?"a":"button");b.className=c||"ans";b.innerHTML=t;if(link){b.href=f;b.target="_blank";b.rel="noopener"}else b.addEventListener("click",f);MB.appendChild(b)});
}
const GP='<i class="fa-brands fa-google-play"></i>Google Play',AS='<i class="fa-brands fa-app-store-ios"></i>App Store';
function mStore(){MR=mStore;mOpen();mSay(()=>T4("Excellent choix ! 🎉 Installe IKOIZANA sur ton téléphone et continue l’aventure avec moi.","Safidy tsara! 🎉 Apetraho amin’ny findainao i IKOIZANA ary tohizo miaraka amiko ny dia.","选得好！🎉 在手机上安装 IKOIZANA，继续和我一起探索吧。","Great choice! 🎉 Install IKOIZANA on your phone and keep the adventure going with me."));mBtns([[GP,CONF.play,"btn"],[AS,CONF.apple,"btn"],[X("Plutôt la démo"),()=>mPick()]])}
function mPick(){MR=mPick;mOpen();mSay(()=>T4("Choisis une catégorie : 8 questions, 4 réponses chacune. 😉","Misafidiana sokajy: fanontaniana 8, safidy valiny 4 isaky ny fanontaniana. 😉","选择一个类别：共 8 道题，每题 4 个选项。😉","Choose a category: 8 questions, 4 answers each. 😉"));mBtns(Object.entries(CATS).map(([k,c])=>[`<span class="cn"><i class="fa-solid ${c.ic}" style="color:${c.col}"></i> ${c.n}</span><span class="cx">${XPC[k]||0} XP</span><span class="cs">${lockImg(locked(k))}</span>`,()=>mPlay(k),"ans cr"]))}
function mOffer(k){if(locked(k))return mLocked(k);MR=()=>mOffer(k);const ex=CATS[k].q[0],c=CATS[k].n;mOpen();mSay(()=>T4(`Exemple en ${c} : « ${ex[0]} » Tu as ta petite idée ?`,`Ohatra ao amin’ny sokajy ${c}: « ${ex[0]} » Manana hevitra ve ianao?`,`${c}类示例：“${ex[0]}”你有答案了吗？`,`Example from ${c}: “${ex[0]}” Got an idea?`));mBtns([[X("Voir la réponse"),()=>mSay(()=>T4(`Réponse : ${ex[1]} ! Et il y en a 7 autres à découvrir. 😉`,`Valiny: ${ex[1]}! Mbola misy 7 hafa hotadiavinao. 😉`,`答案：${ex[1]}！还有另外 7 道题等你发现。😉`,`Answer: ${ex[1]}! And there are 7 more to discover. 😉`))],[X("Oui, je joue (8 questions) !"),()=>mPlay(k),"btn yes"]])}
const WHY=[
 {fr:["Apprendre ensemble","Quand des millions de personnes partagent les mêmes bases, elles se comprennent mieux : moins de préjugés, plus de dialogue entre les cultures."],
  mg:["Mianatra miaraka","Rehefa miaraka mahafantatra ny fototra iraisana ny olona an-tapitrisany, dia mifankahazo kokoa izy ireo: mihena ny fitsarana mialoha, mitombo ny resaka eo amin’ny kolontsaina samihafa."],
  zh:["一起学习","当数百万人拥有共同的知识基础，彼此就更容易理解：偏见更少，不同文化之间的对话更多。"],
  en:["Learning together","When millions of people share the same foundations, they understand each other better: fewer prejudices, more dialogue between cultures."]},
 {fr:["Un savoir pour tous","Un simple téléphone suffit : la culture générale n’est plus réservée à quelques-uns, elle devient accessible à chacun, partout."],
  mg:["Fahalalana ho an’ny rehetra","Findainana tsotra iray ihany no ilaina: tsy voatokana ho an’ny vitsy intsony ny kolontsaina ankapobeny, fa azon’ny rehetra, na aiza na aiza."],
  zh:["人人可得的知识","一部手机就够了：通识不再只属于少数人，而是人人都能随时随地获得。"],
  en:["Knowledge for everyone","A simple phone is enough: general knowledge is no longer reserved for a few, it becomes accessible to everyone, everywhere."]},
 {fr:["Chaque culture compte","Madagascar est mise en valeur en premier, sans jamais minimiser les autres : chaque peuple s’y retrouve et se respecte."],
  mg:["Manan-danja ny kolontsaina tsirairay","Asongadina aloha i Madagasikara, nefa tsy manao tsinontsinona ny hafa: samy mahita ny tenany sy mifanajy ny vahoaka rehetra ao."],
  zh:["每种文化都重要","马达加斯加被放在首位，但从不贬低其他文化：每个民族都能在这里找到自己，并彼此尊重。"],
  en:["Every culture matters","Madagascar is highlighted first, without ever diminishing the others: every people finds itself here and is respected."]},
 {fr:["Ton geste a un effet","Un seul partage peut déclencher une chaîne de curiosité autour de toi. Les grands changements commencent par un petit geste."],
  mg:["Misy vokany ny zavatra ataonao","Fizarana tokana dia mety hamoaka rojo-pahalianana manodidina anao. Ny fiovana lehibe dia manomboka amin’ny fihetsika kely."],
  zh:["你的举动很有力量","一次分享就可能在你身边引发一连串的好奇心。伟大的改变，都始于一个小小的举动。"],
  en:["Your action makes a difference","A single share can spark a chain of curiosity around you. Big changes begin with a small gesture."]}
];
function mWhy(){MR=mWhy;mOpen();mSay(()=>T4("Pourquoi ça compte pour toute l’humanité ? Touche un argument. 🌍","Nahoana no zava-dehibe amin’ny olombelona rehetra izany? Tsindrio ny antony iray. 🌍","为什么这对全人类都很重要？点击一条理由。🌍","Why does this matter for all of humanity? Tap a reason. 🌍"));mBtns(WHY.map(w=>[P(w)[0],e=>{e.currentTarget.classList.add("ok");mSay(P(w)[1])}]))}
function mInvite(){MR=mInvite;mOpen();mSay(()=>T4("Tu te plais ici ? 🐒 Installe IKOIZANA sur ton téléphone, ou joue à la démo tout de suite !","Mahafinaritra anao ve eto? 🐒 Apetraho amin’ny findainao i IKOIZANA, na andramo avy hatrany ny lalao!","喜欢这里吗？🐒 在手机上安装 IKOIZANA，或者马上试玩演示！","Enjoying it here? 🐒 Install IKOIZANA on your phone, or play the demo right now!"));mBtns([])}
try{if(!sessionStorage.getItem("ikz-inv"))setTimeout(()=>{if(!M.classList.contains("on")){sessionStorage.setItem("ikz-inv",1);mInvite()}},CONF.invitation*1000)}catch(e){}
let PN="",asked=0,XP=0,REGD=0;
const nm=()=>PN?(LANG==="zh"?"，":", ")+PN:"";
(function nt(){setTimeout(()=>{if(asked)return;if(M.classList.contains("on"))return nt();mName(()=>{const f=()=>{mOpen();mSay(()=>(PN?T4("Enchanté "+PN+" ! ","Faly mahalala anao, "+PN+"! ","很高兴认识你，"+PN+"！","Nice to meet you, "+PN+"! "):"")+T4("Bonne visite ! 🐒","Mirary fitsidihana tsara! 🐒","祝你参观愉快！🐒","Enjoy your visit! 🐒"));me("peace");MB.innerHTML=""};MR=f;f()})},nt.t=nt.t?5000:CONF.nom*1000)})();
addEventListener("beforeunload",e=>{if(XP>0&&!REG){e.preventDefault();e.returnValue=""}});
function addXP(v){XP+=v;$("xpv").textContent=XP}
function mName(cb){
  const pv=$("pn")?$("pn").value:"";
  asked=1;MR=()=>mName(cb);mOpen();mSay(()=>T4("Comment je t’appelle ? Comme ça, je pourrai te féliciter… et te gronder, comme un vrai pote ! 😄 Tu peux aussi rester anonyme. 🐒","Antsoiko hoe ahoana ianao? Mba hahafahako mankalaza anao… sy mananatra anao, tahaka ny namana tena izy! 😄 Afaka tsy hilaza anarana koa ianao. 🐒","我该怎么称呼你呢？这样我就能像好朋友一样夸你……也能念叨你几句！😄 你也可以保持匿名。🐒","What should I call you? That way I can cheer you on… and nag you a bit, just like a real friend! 😄 You can stay anonymous too. 🐒"));
  MB.innerHTML=`<input class="in" id="pn" maxlength="20" placeholder="${X("Ton nom de joueur (facultatif)")}" aria-label="${X("Nom de joueur")}">`;
  if(pv)$("pn").value=pv;
  mBtns([[X("Valider"),()=>{PN=$("pn").value.trim().replace(/[<>]/g,"");cb()},"btn yes"],[X("Rester anonyme"),()=>{PN="";cb()},"btn ghost"]],true);
  setTimeout(()=>{const i=$("pn");if(i)i.focus()},60);
}
/* ===== INSCRIPTION RÉELLE (Supabase via auth.js → window.IkoAuth) =====
   mReg("up")  = créer un compte   |   mReg("in") = se connecter
   Pour changer un texte : modifie la ligne T4("FR","MG","ZH","EN") correspondante. */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let regBusy=0;
function mReg(a){
  const mode=a==="in"?"in":"up";           /* a peut être un clic : on ignore alors */
  const oe=$("rg")?$("rg").value:"";
  MR=()=>mReg(mode);mOpen();if(G){clearInterval(G.iv);G.stop=1}
  mSay(()=>mode==="in"
    ?T4(`Content de te revoir${nm()} ! Connecte-toi. 👋`,`Faly mahita anao indray${nm()}! Midira. 👋`,`欢迎回来${nm()}！请登录。👋`,`Welcome back${nm()}! Log in. 👋`)
    :T4(`Crée ton compte pour garder tes ${XP} XP${nm()}. E-mail + mot de passe, ou Google. 🔐`,`Mamorona kaonty mba hitahiry ny XP ${XP}${nm()}. Mailaka + tenimiafina, na Google. 🔐`,`创建账号以保留你的 ${XP} XP${nm()}。邮箱＋密码，或使用 Google。🔐`,`Create your account to keep your ${XP} XP${nm()}. Email + password, or Google. 🔐`));
  MB.innerHTML=`<input class="in" id="rg" type="email" autocomplete="email" maxlength="80" placeholder="${T4("E-mail","Mailaka","电子邮箱","Email")}" aria-label="${T4("E-mail","Mailaka","电子邮箱","Email")}"><input class="in" id="rp" type="password" autocomplete="${mode==="in"?"current-password":"new-password"}" maxlength="72" style="margin-top:8px" placeholder="${T4("Mot de passe (6 caractères min.)","Tenimiafina (6 farafahakeliny)","密码（至少 6 位）","Password (min. 6 characters)")}" aria-label="${T4("Mot de passe","Tenimiafina","密码","Password")}"><p class="fb" id="rf"></p>`;
  if(oe)$("rg").value=oe;
  const L=[
    [mode==="in"?T4("Me connecter","Hiditra","登录","Log in"):T4("Créer mon compte","Hamorona kaonty","创建账号","Create my account"),()=>regGo(mode),"btn yes"],
    [T4("Continuer avec Google","Tohizo amin’ny Google","使用 Google 继续","Continue with Google"),regGoogle,"btn"],
    [mode==="in"?T4("Créer un compte","Hamorona kaonty vaovao","创建新账号","Create an account"):T4("J’ai déjà un compte","Manana kaonty aho","我已有账号","I already have an account"),()=>mReg(mode==="in"?"up":"in"),"btn ghost"]
  ];
  if(mode==="in")L.push([T4("Mot de passe oublié","Adino ny tenimiafina","忘记密码","Forgot password"),regForgot,"btn ghost"]);
  mBtns(L,true);
}
const emOK=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
async function regGo(mode){
  if(regBusy)return;
  const f=$("rf"),em=$("rg").value.trim().replace(/[<>]/g,""),pw=$("rp").value;
  if(!emOK(em)){f.textContent=T4("Entre un e-mail valide.","Ampidiro mailaka marina.","请输入有效的电子邮箱。","Enter a valid email.");return}
  if(pw.length<6){f.textContent=T4("6 caractères minimum.","6 farafahakeliny.","至少 6 个字符。","6 characters minimum.");return}
  if(!window.IkoAuth){f.textContent=T4("Service indisponible, réessaie.","Tsy azo ampiasaina, andramo indray.","服务暂不可用，请重试。","Service unavailable, try again.");return}
  regBusy=1;f.textContent="…";
  const r=mode==="in"?await IkoAuth.connecter(em,pw):await IkoAuth.inscrire(em,pw,PN,XP);
  regBusy=0;
  if(!r.ok){f.textContent=r.error;return}      /* message d’erreur en français (auth.js) */
  REG=1;mRegDone(em,mode,r.confirmationRequise);
}
async function regGoogle(){
  if(!window.IkoAuth){$("rf").textContent=T4("Service indisponible, réessaie.","Tsy azo ampiasaina, andramo indray.","服务暂不可用，请重试。","Service unavailable, try again.");return}
  REG=1;                                         /* évite l’alerte « quitter la page ? » */
  const r=await IkoAuth.connecterGoogle(XP);
  if(!r.ok){REG=0;$("rf").textContent=r.error}
}
async function regForgot(){
  const f=$("rf"),em=$("rg").value.trim();
  if(!emOK(em)){f.textContent=T4("Entre d’abord ton e-mail.","Ampidiro aloha ny mailakao.","请先输入你的电子邮箱。","Enter your email first.");return}
  const r=await IkoAuth.motDePasseOublie(em);
  f.textContent=r.ok?T4("E-mail envoyé ! Vérifie ta boîte de réception.","Alefa ny mailaka! Jereo ny boaty fandraisanao.","邮件已发送！请查看收件箱。","Email sent! Check your inbox."):r.error;
}
function mRegDone(em,mode,conf){
  MR=()=>mRegDone(em,mode,conf);mOpen();
  const e=esc(em);
  const msg=mode==="in"
    ?T4(`✅ Connecté${nm()} ! Content de te revoir.`,`✅ Tafiditra${nm()}! Faly mahita anao indray.`,`✅ 已登录${nm()}！欢迎回来。`,`✅ Logged in${nm()}! Welcome back.`)
    :conf
    ?T4(`✅ Compte créé${nm()} ! Un e-mail de confirmation t’a été envoyé : clique sur le lien, puis installe l’app et connecte-toi avec ${e} pour retrouver tes ${XP} XP.`,`✅ Voaforona ny kaonty${nm()}! Nisy mailaka fanamafisana nalefa: tsindrio ny rohy, avy eo apetraho ny fampiharana ary midira amin’ny ${e} mba hahitana ny XP ${XP}.`,`✅ 账号已创建${nm()}！确认邮件已发送：请点击链接，然后安装应用并用 ${e} 登录，找回你的 ${XP} XP。`,`✅ Account created${nm()}! A confirmation email was sent: click the link, then install the app and log in with ${e} to find your ${XP} XP.`)
    :T4(`✅ Compte créé${nm()} ! Installe l’app et connecte-toi avec ${e} pour retrouver tes ${XP} XP.`,`✅ Voaforona ny kaonty${nm()}! Apetraho ny fampiharana ary midira amin’ny ${e} mba hahitana ny XP ${XP}.`,`✅ 账号已创建${nm()}！安装应用并用 ${e} 登录，找回你的 ${XP} XP。`,`✅ Account created${nm()}! Install the app and log in with ${e} to find your ${XP} XP.`);
  mSay(()=>msg);
  MB.innerHTML=`<div class="alert"><i class="fa-solid fa-circle-check"></i><div><b>${T4("Compte IKOIZANA","Kaonty IKOIZANA","IKOIZANA 账号","IKOIZANA account")}</b><br>${e}</div></div>`;
  mBtns([[GP,CONF.play,"btn"],[AS,CONF.apple,"btn"]],true);
}
function mPlay(k,list,rev){
  if(!asked)return mName(()=>mPlay(k,list,rev));if(!rev&&locked(k))return mLocked(k);if(!rev)lock(k);
  if(G)clearInterval(G.iv);
  G={k,rev,list:sh(list||CATS[k].q.map((_,i)=>i)),i:0,s:0,miss:[],j5:1,jt:1};mQ();
}
function mQ(re){
  const g=G;clearInterval(g.iv);
  const q=CATS[g.k].q[g.list[g.i]];
  if(!re){g.t=g.tot=CONF.duree;g.lock=0}
  MR=()=>{if(g.lock||g.stop)return;mQ(1)};
  const sec=T4("s","s","秒","s");
  MB.innerHTML=`<div class="tbar"><i id="tb"></i></div><p class="qn">${g.rev?T4("Révision","Famerenana","复习","Review")+" · ":""}${CATS[g.k].n} · ${T4(`Question ${g.i+1}/${g.list.length}`,`Fanontaniana ${g.i+1}/${g.list.length}`,`第 ${g.i+1}/${g.list.length} 题`,`Question ${g.i+1}/${g.list.length}`)} · <b id="tl">${Math.ceil(Math.max(g.t,0))}</b> ${sec} · ⚡ ${XP} XP</p><h3>${q[0]}</h3><div class="answers" id="mo"></div><div class="jk"><button class="btn ghost jb" id="j5"${g.j5?"":" disabled"}>50:50</button><button class="btn ghost jb" id="jt"${g.jt?"":" disabled"}>+${CONF.joker} ${sec}</button></div>`;
  if(re){if(LASTSAY)mSay(LASTSAY,1)}
  else if(g.i===0)mSay(()=>g.rev?T4("Reprenons tes erreurs, doucement"+nm()+". 💪","Andao hiverina moramora amin’ireo diso nataonao"+nm()+". 💪","我们慢慢复习你做错的题目"+nm()+"。💪","Let’s go over your mistakes, nice and easy"+nm()+". 💪"):T4("C’est parti"+nm()+", concentre-toi ! 🐒","Andao ary"+nm()+", mifantoha! 🐒","开始吧"+nm()+"，集中注意力！🐒","Let’s go"+nm()+", focus! 🐒"));
  me("think");const done=b=>{
    if(g.stop||g.lock)return;g.lock=1;clearInterval(g.iv);
    const ok=!!b&&b.textContent===q[1];
    [...$("mo").children].forEach(x=>{x.disabled=true;if(x.textContent===q[1])x.classList.add("ok")});
    $("j5").disabled=$("jt").disabled=true;
    if(b&&!ok)b.classList.add("ko");
    AUD.sfx(ok?"ok":"ko");
    me(ok?sh(["cheer","clap","laugh"])[0]:b?"cry":"shock");if(ok){g.s++;if(!g.rev){const v=10+Math.floor(g.t/4);addXP(v);XPC[g.k]=(XPC[g.k]||0)+v;catStat()}}else g.miss.push(g.list[g.i]);
    mSay(()=>ok?sh([T4("Bravo"+nm()+" ! 🎉","Arahaba"+nm()+"! 🎉","太棒了"+nm()+"！🎉","Well done"+nm()+"! 🎉"),T4("Exact !","Marina izany!","完全正确！","Exactly!"),T4("Bien joué"+nm()+" ! 👏","Tsara izany"+nm()+"! 👏","干得漂亮"+nm()+"！👏","Nicely done"+nm()+"! 👏")])[0]:(b?T4("Oups… la bonne réponse : "+q[1]+".","Indrisy… ny valiny marina dia: "+q[1]+".","哎呀……正确答案是：" +q[1]+"。","Oops… the right answer is: "+q[1]+"."):T4("Temps écoulé ! ⏱️ la bonne réponse : "+q[1]+".","Lany ny fotoana! ⏱️ Ny valiny marina dia: "+q[1]+".","时间到！⏱️ 正确答案是："+q[1]+"。","Time’s up! ⏱️ The right answer is: "+q[1]+".")));
    setTimeout(()=>{if(g.stop)return;g.i++;g.i>=g.list.length?mRes():(g.i===4&&g.list.length>4?mHalf():mQ())},2200);
  };
  sh(q.slice(1)).forEach(t=>{const b=document.createElement("button");b.className="ans";b.textContent=t;b.addEventListener("click",()=>done(b));$("mo").appendChild(b)});
  $("j5").addEventListener("click",()=>{if(g.lock||!g.j5)return;g.j5=0;$("j5").disabled=true;sh([...$("mo").children].filter(x=>x.textContent!==q[1])).slice(0,2).forEach(x=>{x.disabled=true;x.classList.add("gone")})});
  $("jt").addEventListener("click",()=>{if(g.lock||!g.jt)return;g.jt=0;$("jt").disabled=true;g.t+=CONF.joker;g.tot+=CONF.joker;mSay(()=>T4("+"+CONF.joker+" secondes ! ⏱️","+"+CONF.joker+" segondra! ⏱️","+"+CONF.joker+" 秒！⏱️","+"+CONF.joker+" seconds! ⏱️"))});
  g.iv=setInterval(()=>{const tb=$("tb");if(!tb||g.stop){clearInterval(g.iv);return}g.t-=.1;tb.style.width=Math.max(g.t,0)/g.tot*100+"%";tb.classList.toggle("low",g.t<5);$("tl").textContent=Math.ceil(Math.max(g.t,0));if(g.t<=0)done(null)},100);
}
function mHalf(){
  MR=mHalf;const s=G.s;
  mSay(()=>s===4?T4(`4/4${nm()} ! 🔥 Sans faute. Tu veux les 4 dernières questions ?`,`4/4${nm()}! 🔥 Tsy nisy diso. Te hamaly ireo fanontaniana 4 farany ve ianao?`,`4/4${nm()}！🔥 全对！要继续最后 4 道题吗？`,`4/4${nm()}! 🔥 Flawless. Do you want the last 4 questions?`):s>=2?T4(`${s}/4${nm()}, pas mal ! Tu continues avec les 4 dernières ?`,`${s}/4${nm()}, tsy ratsy! Hotohizinao ve ny 4 farany?`,`${s}/4${nm()}，不错！继续做最后 4 道题吗？`,`${s}/4${nm()}, not bad! Shall we continue with the last 4?`):T4(`${s}/4… accroche-toi${nm()} ! Les 4 dernières peuvent te sauver. 💪`,`${s}/4… aza kivy${nm()}! Mety hanavotra anao ireo 4 farany. 💪`,`${s}/4……加油${nm()}！最后 4 道题可以帮你翻盘。💪`,`${s}/4… hang in there${nm()}! The last 4 can save you. 💪`));
  MB.innerHTML=`<p class="qn">${T4("Première manche terminée","Vita ny fihodinana voalohany","第一轮结束","First round finished")} · ⚡ ${XP} XP</p>`;
  mBtns([[X("Oui, les 4 dernières !"),()=>mQ(),"btn yes"],[X("Arrêter ici"),()=>{G.list=G.list.slice(0,4);mRes()},"btn ghost"]],true);
}
function mRes(re){
  MR=()=>mRes(1);
  const t=G.list.length,s=G.s,m=G.miss,k=G.k,r=s/t;
  const msg=()=>G.rev?(s===t?T4("Révision réussie : tout est corrigé ! 🌟 Tu apprends vite, je suis fier de toi !","Vita soa ny famerenana: voahitsy daholo! 🌟 Haingana mianatra ianao, mirehareha aho aminao!","复习成功：全部订正了！🌟 你学得真快，我为你骄傲！","Review complete: everything is corrected! 🌟 You learn fast, I’m proud of you!"):T4(`Révision : ${s}/${t} corrigées. Chaque erreur est une leçon, tu veux réessayer ? 💪`,`Famerenana: ${s}/${t} no voahitsy. Fianarana ny diso rehetra, te hanandrana indray ve ianao? 💪`,`复习：订正了 ${s}/${t}。每个错误都是一堂课，再来一次吗？💪`,`Review: ${s}/${t} corrected. Every mistake is a lesson, shall we go again? 💪`)):(s===t?T4(`PARFAIT ! ${s}/${t} 🏆 Quel génie, bravo !`,`TONGA LAFATRA! ${s}/${t} 🏆 Mahay tokoa ianao, arahaba!`,`完美！${s}/${t} 🏆 真是天才，太棒了！`,`PERFECT! ${s}/${t} 🏆 What a genius, well done!`):r>=.75?T4(`Bravo, ${s}/${t} ! 👏 Belle culture. Corrigeons le reste pour viser le sans-faute ?`,`Arahaba, ${s}/${t}! 👏 Kolontsaina tsara. Hahitsy ny sisa ve isika mba hahazoana tsy misy diso?`,`太棒了，${s}/${t}！👏 知识很丰富。把剩下的错题订正一下，争取满分？`,`Well done, ${s}/${t}! 👏 Great knowledge. Shall we fix the rest and aim for a perfect score?`):r>=.5?T4(`${s}/${t} : pas mal, mais je sais que tu peux mieux. 💪 Une petite révision ?`,`${s}/${t}: tsy ratsy, fa fantatro fa mahay mihoatra noho izay ianao. 💪 Hiverina hijery kely ve?`,`${s}/${t}：还不错，但我知道你能做得更好。💪 要不要做个小复习？`,`${s}/${t}: not bad, but I know you can do better. 💪 A little review?`):T4(`Hum… ${s}/${t}. Restons humbles : il te reste du chemin à parcourir, mais c’est ainsi qu’on apprend. 😅 Révisons ensemble ?`,`Hmm… ${s}/${t}. Aoka isika hanetry tena: mbola lavitra ny lalana, fa izany no fomba fianarana. 😅 Hiverina hianatra miaraka ve isika?`,`嗯……${s}/${t}。我们要谦虚：路还很长，但学习就是这样。😅 一起复习吧？`,`Hmm… ${s}/${t}. Let’s stay humble: there’s still a way to go, but that’s how we learn. 😅 Shall we review together?`));
  const tail=()=>T4((PN?" "+PN+" !":"")+` Tu as ${XP} XP : inscris-toi pour ne pas les perdre !`,(PN?" "+PN+"!":"")+` Manana XP ${XP} ianao: misoratra anarana mba tsy ho very izany!`,(PN?" "+PN+"！":"")+` 你已获得 ${XP} XP：快去注册，别让它们丢失！`,(PN?" "+PN+"!":"")+` You have ${XP} XP: sign up so you don’t lose them!`);
  if(!re)AUD.sfx(s===t?"gagne":"fin");me(s===t?"love":r>=.5?"clap":"sad");
  if(!re&&XP>=150&&!ALR){ALR=1;setTimeout(()=>{if(!G||G.i>=G.list.length)mAlert()},3500)}
  if(!re&&!G.rev){const pv=BEST[k];if(!pv||s/t>=pv.s/pv.t){BEST[k]={s,t};try{localStorage.setItem("ikz-best",JSON.stringify(BEST))}catch(e){}}}
  mSay(()=>msg()+tail());
  MB.innerHTML=`<p class="qn">${T4("Résultat :","Vokatra:","结果：","Result:")} ${s}/${t} · ⚡ ${XP} XP</p>`;
  mBtns([...(m.length?[[`<i class="fa-solid fa-rotate"></i>${X("Faire une révision")} (${m.length})`,()=>mPlay(k,m,1),"btn yes"]]:[]),['<i class="fa-solid fa-user-plus"></i>'+X("Garder mon XP"),()=>mReg(),"btn"],[X("⭐ Laisser un avis"),()=>mReview()],[X("Autre catégorie"),()=>mPick()],],true);
}
function mFact(){MR=mFact;mOpen();mSay(()=>T4("Le savais-tu ? Choisis un sujet et touche-le pour découvrir la réponse. 🤔","Fantatrao ve? Misafidiana lohahevitra ary tsindrio mba hahitana ny valiny. 🤔","你知道吗？选一个主题，点击它来揭晓答案。🤔","Did you know? Pick a topic and tap it to reveal the answer. 🤔"));mBtns(FACTS.map(f=>[P(f)[0],e=>{e.currentTarget.classList.add("ok");mSay(()=>P(f)[1]+" "+T4("Et ce n’est qu’un avant-goût : IKOIZANA t’attend avec bien d’autres mystères à percer ! ✨","Ary santionany fotsiny ity: mbola misy zava-miafina maro hafa hovahanao ao amin’i IKOIZANA! ✨","而这只是小试牛刀：IKOIZANA 里还有更多谜题等你来破解！✨","And that’s just a taster: IKOIZANA has plenty more mysteries waiting for you to crack! ✨"))}]))}
/* 🏅 MÉRITES : « Curieux » est offert d'office ; ensuite un badge par catégorie jouée : Maître (or) / Connaisseur (argent) / Apprenti (bronze) selon le résultat */
let BEST={};try{BEST=JSON.parse(localStorage.getItem("ikz-best")||"{}")}catch(e){}
const TIERS=[["#ffc933","rgba(255,201,51,.45)"],["#d5dde8","rgba(213,221,232,.4)"],["#cd7f32","rgba(205,127,50,.45)"]];
const tierOf=r=>r>=.875?0:r>=.5?1:2;
const tierName=i=>[T4("Maître","Tompo","大师","Master"),T4("Connaisseur","Mpahay","行家","Connoisseur"),T4("Apprenti","Mpiofana","学徒","Apprentice")][i];
let SEEN=[];try{SEEN=JSON.parse(localStorage.getItem("ikz-seen")||"[]")}catch(e){}
const POP=["card","review","reg","why","curieux","tester","compet","merites","demo","cat","store"],CUR=6;   /* « Curieux » (diamant) : ouvrir CUR popups différents */
function seen(k){if(!POP.includes(k)||SEEN.includes(k))return;SEEN.push(k);try{localStorage.setItem("ikz-seen",JSON.stringify(SEEN))}catch(e){}}
function mMerit(){MR=mMerit;mOpen();me("clap");
 const keys=Object.keys(CATS).filter(k=>BEST[k]),cu=SEEN.length>=CUR;
 mSay(()=>keys.length?T4("Voici ta collection de mérites ! Pour en récupérer d’autres, teste ton niveau dans une nouvelle catégorie. 🏅","Ity ny fanangonanao mari-boninahitra! Raha te hahazo hafa bebe kokoa ianao, hitsapa ny haavonao amin’ny sokajy vaovao. 🏅","这是你的成就收藏！想获得更多，就去新的类别测测你的水平。🏅","Here’s your collection of achievements! To earn more, test your level in a new category. 🏅"):cu?T4("Bravo, « Curieux » est débloqué : tu fouilles partout, j’adore ! 💎 Pour en récupérer d’autres, teste ton niveau dans une catégorie.","Arahaba, nosokafana ny « Liana »: mijery daholo ianao, tiako izany! 💎 Raha te hahazo hafa ianao, hitsapa ny haavonao amin’ny sokajy iray.","太棒了，“好奇宝宝”已解锁：你什么都爱探索，我喜欢！💎 想获得更多，去某个类别测测你的水平吧。","Nice, “Curious” unlocked: you explore everything, I love it! 💎 To earn more, test your level in a category."):T4("Voici tes mérites ! « Curieux » se débloque en fouillant les boutons du site. Pour les 9 autres, teste ton niveau dans chaque catégorie ! 🏅","Ity ny mari-boninahitrao! Hosokafana ny « Liana » rehefa mijery ny bokotra rehetra eto amin’ny tranonkala ianao. Ho an’ireo 9 hafa, hitsapa ny haavonao isaky ny sokajy! 🏅","这是你的成就！多点点网站上的按钮，就能解锁“好奇宝宝”。另外 9 个成就，要在每个类别里测测你的水平！🏅","Here are your achievements! “Curious” unlocks when you poke around the site’s buttons. For the other 9, test your level in each category! 🏅"));
 const gem=`<div class="bdg gem${cu?"":" off"}"><i class="fa-solid fa-gem"></i><div class="gt"><b>${T4("Curieux","Liana","好奇宝宝","Curious")}</b><span>${cu?T4("Traqueur de secrets","Mpanenjika zava-miafina","秘密猎手","Secret hunter"):T4("Traque tous les boutons du site","Enjeho ny bokotra rehetra eto amin’ny tranonkala","把网站上的每个按钮都找出来","Hunt down every button on the site")}</span><small>${cu?"💎":Math.min(SEEN.length,CUR)+"/"+CUR}</small></div></div>`;
 const slots=Object.keys(CATS).map(k=>{const v=BEST[k];
  if(!v)return `<div class="bdg off"><i class="fa-solid ${CATS[k].ic}"></i><span>${CATS[k].n}</span><small>${T4("À débloquer","Mbola hosokafana","待解锁","To unlock")}</small></div>`;
  const i=tierOf(v.s/v.t),m=TIERS[i];return `<div class="bdg" style="--bc:${m[0]};--bg:${m[1]}"><i class="fa-solid ${CATS[k].ic}"></i><b>${tierName(i)}</b><span>${CATS[k].n}</span><small>${v.s}/${v.t}</small></div>`});
 MB.innerHTML=`<div class="bgrid">${gem}${slots.join("")}</div>`;
 mBtns([[X("Tester mon niveau"),()=>mPick(),"btn yes"]],true)}
const XPC={};
const lockImg=l=>`<svg viewBox="0 0 24 24" width="16" height="16" style="vertical-align:-3px;margin-left:4px"><rect x="5" y="11" width="14" height="10" rx="2" fill="${l?"#ff5d8f":"#19e6a2"}"/><path d="${l?"M8 11V8a4 4 0 018 0v3":"M8 11V8a4 4 0 017.5-2"}" fill="none" stroke="${l?"#ff5d8f":"#19e6a2"}" stroke-width="2" stroke-linecap="round"/></svg>`;
function catStat(){document.querySelectorAll(".cat").forEach((c,i)=>{const k=KEYS[i],h=c.querySelector(".hint");if(h)h.innerHTML=`${CATS[k].n} : ${XPC[k]||0} XP ${lockImg(locked(k))}`})}
let LK=new Set(),REG=0,ALR=0,RK,RT;try{LK=new Set(JSON.parse(localStorage.getItem("ikz-lk")||"[]"))}catch(e){}
const locked=k=>CONF.verrou&&LK.has(k),lock=k=>{if(!CONF.verrou)return;LK.add(k);catStat();try{localStorage.setItem("ikz-lk",JSON.stringify([...LK]))}catch(e){}};
function mLocked(k){MR=()=>mLocked(k);mOpen();me("sad");mSay(()=>T4("🔒 "+CATS[k].n+" : déjà jouée. Une seule partie par catégorie (anti-triche). Télécharge l’app pour explorer davantage !","🔒 "+CATS[k].n+": efa nilalaina. Indray mandeha ihany isaky ny sokajy (mba tsy hisy hosoka). Sintony ny fampiharana raha te hahita bebe kokoa!","🔒 "+CATS[k].n+"：已经玩过了。每个类别只能玩一次（防作弊）。下载应用即可探索更多！","🔒 "+CATS[k].n+": already played. Only one round per category (anti-cheat). Download the app to explore more!"));MB.innerHTML="";mBtns([[GP,CONF.play,"btn"],[AS,CONF.apple,"btn"]],true)}
function mSoon(){MR=mSoon;if(G){clearInterval(G.iv);G.stop=1}mOpen();me("code");mSay(()=>T4("🚧 Encore en préparation ! Reviens très bientôt, nous mettons la touche finale.","🚧 Mbola amboarina! Miverena tsy ho ela, efa eo am-pamaranana izahay.","🚧 还在准备中！请很快再来，我们正在做最后的润色。","🚧 Still in the works! Come back very soon, we’re adding the finishing touches."));MB.innerHTML=""}
document.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(!a||a.matches(".logo"))return;const h=a.getAttribute("href");if(h==="#"||h===""){e.preventDefault();mSoon()}},true);
function mCard(){const K=CONF.koto;MR=mCard;mOpen();me("peace");mSay(()=>T4("Voici ma carte professionnelle ! 😎","Ity ny karatrako ara-piasana! 😎","这是我的名片！😎","Here’s my pro card! 😎"));
 MB.innerHTML=`<div class="idc"><div class="idh">IKOIZANA · WEB</div><div class="idb"><div class="lemur" id="idl"></div><dl><dt>${X("Nom")}</dt><dd>${K.nom}</dd><dt>${X("Prénom")}</dt><dd>${K.prenom}</dd><dt>${X("Âge")}</dt><dd>${X(K.age)}</dd><dt>${X("Nationalité")}</dt><dd>${X(K.nat)}</dd></dl></div><div class="idf">${X(K.role)}</div></div>`;emo($("idl"),"calm")}
function mAlert(){MR=mAlert;if(G){clearInterval(G.iv);G.stop=1}mOpen();me("shock");
 mSay(()=>T4(`🎉 ${XP} XP${nm()} ! Ne rafraîchis surtout pas le site, tu perdrais tout. Enregistre-les maintenant !`,`🎉 XP ${XP}${nm()}! Aza avereno alefa mihitsy ny pejy, fa very ny zava-drehetra. Soraty izao izy ireo!`,`🎉 ${XP} XP${nm()}！千万别刷新网页，否则全部会丢失。现在就保存它们吧！`,`🎉 ${XP} XP${nm()}! Whatever you do, don’t refresh the site, you’d lose everything. Save them now!`));
 MB.innerHTML=`<div class="alert"><div>⚠️ <b>${T4("Le risque :","Ny loza:","风险：","The risk:")}</b> ${T4("si tu explores d’abord sans t’enregistrer, un simple rafraîchissement efface tes XP. Mais explorer davantage te donnera de meilleurs avantages (plus d’XP, plus de catégories dans l’app).","raha mijery aloha ianao nefa tsy mbola misoratra anarana, dia ampy ny famerenana ny pejy hamafa ny XP-nao. Kanefa ny fijerena bebe kokoa dia hanome tombony tsara kokoa anao (XP bebe kokoa, sokajy bebe kokoa ao amin’ny fampiharana).","如果你先探索而不注册，只要刷新一下页面，XP 就会被清除。但多探索也会带来更好的好处（更多 XP，应用里还有更多类别）。","if you explore first without registering, a simple refresh wipes your XP. But exploring more will give you better perks (more XP, more categories in the app).")}</div></div>`;
 mBtns([[X("Enregistrer mon XP"),()=>mReg(),"btn yes"],[X("Explorer d’abord (je prends le risque)"),()=>mPick(),"btn ghost"]],true)}
function mThanks(r){MR=()=>mThanks(r);mOpen();me("love");mSay(()=>r>=4?T4("Merci énormément"+nm()+" ! 💙","Misaotra indrindra"+nm()+"! 💙","非常感谢"+nm()+"！💙","Thank you so much"+nm()+"! 💙"):T4("Merci"+nm()+", nous allons nous améliorer ! 💪","Misaotra"+nm()+", hanatsara izahay! 💪","谢谢"+nm()+"，我们会继续改进！💪","Thank you"+nm()+", we’ll keep improving! 💪"));MB.innerHTML=""}
function mReview(){MR=mReview;mOpen();me("wink");mSay(()=>T4("Ton avis compte beaucoup pour nous ! Note ton expérience sur 5 étoiles ⭐.","Zava-dehibe aminay be ny hevitrao! Omeo kintana hatramin’ny 5 ny traikefanao ⭐.","你的意见对我们非常重要！请为你的体验打分（满分 5 星）⭐。","Your opinion means a lot to us! Rate your experience out of 5 stars ⭐."));let r=0;
 MB.innerHTML='<div class="stars" id="sr">'+[1,2,3,4,5].map(i=>`<button data-s="${i}" aria-label="${i}">★</button>`).join("")+`</div><textarea class="in" id="rt" rows="2" placeholder="${X("Un petit mot (facultatif)")}"></textarea><p class="fb" id="rf"></p>`;
 $("sr").onclick=e=>{const v=+(e.target.dataset.s||0);if(!v)return;r=v;[...$("sr").children].forEach((b,i)=>b.classList.toggle("on",i<v))};
 mBtns([[X("Envoyer mon avis"),()=>{if(!r){$("rf").textContent=X("Touche une étoile d’abord ⭐");return}
  try{localStorage.setItem("ikz-avis",JSON.stringify({r,t:$("rt").value.slice(0,300)}))}catch(e){}
  mThanks(r);
  if(r>=4&&CONF.avis&&CONF.avis!=="#")window.open(CONF.avis,"_blank","noopener")},"btn yes"]],true)}
function mRank(){MR=mRank;mOpen();me("fight");clearTimeout(RT);
 mSay(()=>T4("Ligue du mois (démo) : les joueurs en ligne gagnent de l’XP en direct. Joue pour grimper ! 🏆","Fifaninanana isam-bolana (fanandramana): mahazo XP mivantana ny mpilalao an-tserasera. Milalaova hiakatra laharana! 🏆","月度联赛（演示）：在线玩家实时获得 XP。快来挑战，提升排名！🏆","Monthly league (demo): online players earn XP live. Play to climb the ranking! 🏆"));
 if(!RK){const N="Mialy Tsiory Hery Nirina Faly Lanto Toky Fanja Rado Mamy Voahangy Tahina Soa Njaka Aina Zo Miora Rindra Andry Ando Haja Ony Fenitra Kanto Tiana".split(" ");
  RK=N.concat(N).slice(0,49).map((n,i)=>({id:i,n:i>24?n+" "+"ABCDEFGHJK"[i%10]+".":n,xp:80+Math.floor(Math.random()*1100),on:Math.random()<.5,c:Math.floor(Math.random()*360),ph:Math.random()<.4?sh(["ok","cheer","wink","laugh","peace","love","clap","calm"])[0]:0}));RK.push({id:99,n:"",xp:0,on:1,me:1})}
 const you=RK.find(x=>x.me);MB.innerHTML='<div class="rkl" id="rk"></div>';
 const draw=()=>{you.xp=XP;you.n=PN||T4("Toi","Ianao","你","You");const old=RK.slice();RK.sort((a,b)=>b.xp-a.xp);
  const tp={};$("rk").querySelectorAll(".rk").forEach(e=>tp[e.dataset.id]=e.offsetTop);$("rk").innerHTML=RK.map((p,i)=>{const d=old.indexOf(p)-i;if(d)p.a=d>0?1:-1;
   return `<div data-id="${p.id}" class="rk${p.me?" me":""}${i?"":" top"}"><span class="rn">${i+1}</span><span class="av" style="${p.me||p.ph?`background-image:url(${EMO[p.me?"calm":p.ph]});background-color:#0b2a66`:`background:hsl(${p.c} 60% 42%)`}">${p.me||p.ph?"":p.n[0]}${p.on?'<u class="on"></u>':""}</span><span class="nm">${p.n}</span><span class="${p.a>0?"up":"dn"}">${p.a>0?"▲":p.a<0?"▼":""}</span><b>${p.xp} XP</b></div>`}).join("");
  $("rk").querySelectorAll(".rk").forEach(e=>{const d=tp[e.dataset.id]-e.offsetTop;if(d)e.animate([{transform:`translateY(${d}px)`},{transform:"none"}],{duration:800,easing:"ease-in-out"})})};
 const tick=()=>{if(!$("rk")||!M.classList.contains("on"))return;
  for(let k=0;k<5;k++){const p=RK[Math.floor(Math.random()*RK.length)];if(p.me)continue;if(Math.random()<.25)p.on=!p.on;if(p.on)p.xp+=5+Math.floor(Math.random()*45)}
  draw();RT=setTimeout(tick,1300+Math.random()*1700)};
 draw();RT=setTimeout(tick,1500)}
const KEYS=Object.keys(CATS);
document.querySelectorAll(".card").forEach((c,i)=>{c.style.setProperty("--c",["#00e5ff","#ffb300","#ff5d8f","#b388ff"][i]);c.dataset.act=["curieux","tester","compet","merites"][i];c.tabIndex=0;c.insertAdjacentHTML("beforeend",`<small class="hint" data-hi="${i}"></small>`)});
document.querySelectorAll(".cat").forEach((c,i)=>{c.dataset.act="cat";c.dataset.k=KEYS[i];c.style.setProperty("--c",CATS[KEYS[i]].col);c.tabIndex=0;c.insertAdjacentHTML("beforeend",'<small class="hint"></small>')});
const ACT={card:mCard,review:mReview,reg:mReg,why:mWhy,curieux:mFact,tester:mPick,compet:mRank,merites:mMerit,demo:mPick,cat:el=>mOffer(el.dataset.k),contact:()=>go(S.length-1),
  share:async()=>{const d={title:"IKOIZANA",text:X("Teste ta culture générale avec IKOIZANA !"),url:location.href};try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(d.url);$("sfb").textContent=X("Lien copié ✔ Partage-le autour de toi !")}}catch(e){}}};
document.addEventListener("click",e=>{const a=e.target.closest("[data-act]");if(a&&ACT[a.dataset.act]){seen(a.dataset.act);ACT[a.dataset.act](a)}});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.dataset&&e.target.dataset.act)e.target.click();if(e.key==="Escape"&&M.classList.contains("on"))e.preventDefault()});
document.addEventListener("click",e=>{const t=e.target.closest("button,a,.card,.cat,.ans,.chip,.soc,.bubble");if(t){t.classList.add("clk");if(!t.matches(".ans,#rp"))AUD.sfx("clic")}},true);
$("mx").addEventListener("click",mShut);

/* ↔️ CARROUSELS : boutons gauche/droite, défilement fluide, bords estompés quand il reste des cartes *//* Carrousels : boutons gauche / droite (défilement fluide) */
document.querySelectorAll(".hscroll").forEach(h=>{
  const w=document.createElement("div");w.className="car";h.before(w);w.append(h);
  [["l","left"],["r","right"]].forEach(([c,d])=>{const b=document.createElement("button");b.className="arr "+c;b.setAttribute("aria-label",d==="left"?"Précédent":"Suivant");b.innerHTML=`<i class="fa-solid fa-chevron-${d}"></i>`;b.addEventListener("click",()=>h.scrollBy({left:(c==="l"?-1:1)*h.clientWidth*.8,behavior:"smooth"}));w.appendChild(b)});
  // bords estompés + flèches masquées quand il n'y a plus rien à faire défiler de ce côté
  const A=[...w.querySelectorAll(".arr")];
  const upd=()=>{const m=h.scrollWidth-h.clientWidth,x=h.scrollLeft;
    h.style.setProperty("--ml",x>6?"64px":"0px");h.style.setProperty("--mr",x<m-6?"64px":"0px");
    A[0].classList.toggle("off",x<=6);A[1].classList.toggle("off",x>=m-6)};
  h.addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);setTimeout(upd,200);setTimeout(upd,1200);
});


/* =====================================================================
   🌍 LANGUE — un seul bouton (#lang) : MG → CH → FR → EN → MG … en boucle infinie.
   Tous les textes fixes sont dans DICT (clé = texte français), les phrases dynamiques utilisent T4(fr,mg,zh,en),
   les questions du quiz sont dans QP (questions) + OPT (réponses). Rien n'est mélangé : tout change en même temps.
   ===================================================================== */
function applyQuiz(){
 Object.keys(CATS).forEach(k=>{
  CATS[k].n=X(CATFR[k]);
  CATS[k].q=QFR[k].map((q,i)=>[LANG==="fr"?q[0]:QP[LANG][k][i],...q.slice(1).map(optX)]);
 });
}
function applyHints(){document.querySelectorAll(".card .hint").forEach(h=>{h.textContent=X(HINTS[+h.dataset.hi])+" →"})}
function applySite(){
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const p=n.parentElement;return p&&!["SCRIPT","STYLE","OPTION","TEXTAREA"].includes(p.tagName)&&!p.closest("#mbody,#mb,#a,#q,#fb,.bubble,.hint,#tname,#dots,#mfb,#sfb,#simt")&&n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
 let nd;while(nd=w.nextNode()){
  if(nd.__ikzFr===undefined)nd.__ikzFr=nd.nodeValue;
  const k=nd.__ikzFr.trim();
  if(DICT[k])nd.nodeValue=nd.__ikzFr.match(/^\s*/)[0]+X(k)+nd.__ikzFr.match(/\s*$/)[0];
 }
 ["placeholder","aria-label","title"].forEach(a=>document.querySelectorAll("["+a+"]").forEach(e=>{
  const key="ikz"+a.replace("-","");
  if(e.dataset[key]===undefined)e.dataset[key]=e.getAttribute(a);
  const f=e.dataset[key];if(DICT[f])e.setAttribute(a,X(f));
 }));
 S.forEach(s=>{if(s.dataset.tf===undefined)s.dataset.tf=s.dataset.t;s.dataset.t=X(s.dataset.tf)});
 [...$("dots").children].forEach((d,i)=>{d.title=S[i].dataset.t;d.setAttribute("aria-label",S[i].dataset.t)});
 document.querySelectorAll("#deck [data-say]").forEach(e=>{
  let say;
  if(e.dataset.greet)say=greetTxt();
  else{if(e.dataset.f===undefined)e.dataset.f=e.dataset.say;say=X(e.dataset.f)}
  e.dataset.say=say;
  if(!e.classList.contains("typing")&&e.textContent.trim())e.textContent=say;
 });
 document.title=X("IKOIZANA – Apprends en jouant");
 const md=document.querySelector('meta[name="description"]');if(md){if(md.dataset.f===undefined)md.dataset.f=md.content;md.content=X(md.dataset.f)}
 document.documentElement.lang=LANG==="zh"?"zh-Hans":LANG;
 $("simt").textContent=TX[LANG].s;
}
function renderReply(){if(!REPLY)return;const kr=$("kotoR");$("mine").textContent=REPLY.b.textContent;kr.dataset.live=X(REPLY.b.dataset.rf);if(!kr.classList.contains("typing")&&kr.textContent.trim())kr.textContent=kr.dataset.live}
function lang(l){
 if(!LG.includes(l))l="fr";
 LANG=l;try{localStorage.setItem("ikz-lang",l)}catch(e){}
 applyQuiz();applySite();
 $("lgt").textContent=LN[l];
 theme(root.dataset.theme||"nuit");
 applyHints();renderReply();catStat();
 $("mfb").textContent="";$("sfb").textContent="";
 show();
 if(M.classList.contains("on")&&MR)MR();
}
$("simx").onclick=()=>{document.body.classList.remove("sim");$("sim").hidden=true};
$("fi").onclick=()=>{seen("store");mStore()};$("fd").onclick=()=>{seen("demo");mPick()};
$("lang").onclick=()=>lang(LG[(LG.indexOf(LANG)+1)%LG.length]);   // MG → CH → FR → EN → MG …
lang(LANG);

/* =====================================================================
   COMPTE CONNECTÉ — photo de profil + « Mon compte » (Supabase via auth.js)
   - Connecté : le bouton du haut affiche la photo Google (ou l'initiale) + le prénom.
   - Clic sur ce bouton : fenêtre « Mon compte » (nom, e-mail, XP, déconnexion).
   - Déconnecté : le bouton « S’inscrire » d’origine revient.
   ===================================================================== */
(function(){
  let ACC=null,painting=0,OBS=null,PSEUDO="";
  const btn=()=>$("reg");
  const ORIG=btn()?btn().innerHTML:"";
  const meta=u=>(u&&u.user_metadata)||{};
  const accName=u=>String(meta(u).full_name||meta(u).name||meta(u).user_name||(u.email||"").split("@")[0]||"Joueur").replace(/[<>&"]/g,"");
  const accPic=u=>{const p=meta(u).avatar_url||meta(u).picture||"";return /^https:\/\//.test(p)?p:""};
  const first=u=>accName(u).trim().split(/\s+/)[0].slice(0,14);
  const disp=u=>(PSEUDO&&PSEUDO!=="Joueur"?PSEUDO:first(u)).slice(0,20);
  /* pseudo choisi par le joueur : remplace le prénom Google partout */
  window.ikzSetPseudo=w=>{PSEUDO=String(w||"");window.IKZ_PSEUDO=PSEUDO;paint();dispatchEvent(new CustomEvent("ikz-pseudo",{detail:PSEUDO}))};
  const avatar=(u,s)=>{
    const p=accPic(u),ini=esc(disp(u).trim().charAt(0).toUpperCase()||"?");
    return p
      ?`<img class="av" src="${esc(p)}" alt="" referrerpolicy="no-referrer" style="width:${s}px;height:${s}px" onerror="this.outerHTML='<span class=&quot;av&quot; style=&quot;width:${s}px;height:${s}px&quot;>${ini}</span>'">`
      :`<span class="av" style="width:${s}px;height:${s}px;font-size:${Math.round(s*.5)}px">${ini}</span>`;
  };

  const st=document.createElement("style");
  st.textContent="#reg .av{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;object-fit:cover;background:#5e9bf7;color:#fff;font-weight:700;flex:none}"
    +"#reg #regt{max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"
    +".alert .av{margin-right:10px}";
  document.head.appendChild(st);

  function paint(){
    const el=btn();if(!el)return;
    painting=1;if(OBS)OBS.disconnect();
    if(ACC){
      el.innerHTML=avatar(ACC,22)+'<span id="regt">'+esc(disp(ACC).slice(0,14))+'</span>';
      el.setAttribute("aria-label",T4("Mon compte","Ny kaontiko","我的账号","My account"));
    }else{
      el.innerHTML=ORIG;
      el.setAttribute("aria-label","S’inscrire");
      try{applySite()}catch(e){}
    }
    if(OBS)OBS.observe(el,{childList:true,subtree:true,characterData:true});
    painting=0;
  }
  /* si le site retraduit le bouton (changement de langue), on remet la photo */
  OBS=new MutationObserver(()=>{if(!painting&&ACC)paint()});

  async function logout(){
    if(window.IkoAuth)await IkoAuth.deconnecter();
    mShut();
  }
  async function mAccount(){
    if(!ACC)return;
    const u=ACC,nm=disp(u)||"Joueur";
    MR=()=>mAccount();mOpen();
    mSay(()=>T4(`Salut ${nm} ! 👋 Voici ta carte de joueur.`,`Salama ${nm}! 👋 Ity ny karatrao ho mpilalao.`,`你好 ${nm}！👋 这是你的玩家名片。`,`Hi ${nm}! 👋 Here is your player card.`));
    /* badges reçus (même logique que « Mérites ») */
    const bd=[];
    if(SEEN.length>=CUR)bd.push(`<div class="bdg gem"><i class="fa-solid fa-gem"></i><div class="gt"><b>${T4("Curieux","Liana","好奇宝宝","Curious")}</b><span>${T4("Traqueur de secrets","Mpanenjika zava-miafina","秘密猎手","Secret hunter")}</span><small>💎</small></div></div>`);
    Object.keys(CATS).forEach(k=>{const v=BEST[k];if(!v)return;const i=tierOf(v.s/v.t),m=TIERS[i];
      bd.push(`<div class="bdg" style="--bc:${m[0]};--bg:${m[1]}"><i class="fa-solid ${CATS[k].ic}"></i><b>${tierName(i)}</b><span>${CATS[k].n}</span><small>${v.s}/${v.t}</small></div>`)});
    const chip='display:inline-flex;gap:6px;align-items:center;padding:8px 14px;border-radius:99px;border:1px solid rgba(0,229,255,.4);font-weight:700';
    MB.innerHTML=`<div style="text-align:center">
      <div id="accav" style="display:flex;justify-content:center">${avatar(u,76)}</div>
      <h3 id="accn" style="margin:10px 0 2px">${esc(nm)}</h3>
      <small style="opacity:.7">${esc(u.email||"")}</small>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:14px 0">
        <span style="${chip}">⚡ <span id="accxp">${XP}</span> XP</span>
        <span style="${chip}">🏆 ${T4("Rang","Laharana","排名","Rank")} <span id="accrk">…</span></span>
      </div>
      <p style="margin:6px 0;font-weight:700">${T4("Mes badges","Ny mari-boninahitro","我的徽章","My badges")} (${bd.length})</p>
      ${bd.length?`<div class="bgrid">${bd.join("")}</div>`:`<p style="opacity:.75">${T4("Aucun badge pour l’instant : teste ton niveau dans une catégorie pour en gagner.","Mbola tsy misy mari-boninahitra: hitsapa ny haavonao amin’ny sokajy iray.","暂时还没有徽章：去某个类别测测你的水平吧。","No badges yet: test your level in a category to earn one.")}</p>`}
      <div style="display:flex;gap:8px;margin-top:14px"><input class="in" id="psd" maxlength="20" autocomplete="off" placeholder="${T4("Ton pseudo","Ny solonanaranao","你的昵称","Your nickname")}" value="${esc(nm)}"><button class="btn yes" id="psb" type="button">OK</button></div>
      <p class="fb" id="psf" style="min-height:1.2em"></p></div>`;
    mBtns([[T4("Se déconnecter","Hiala","退出登录","Log out"),logout,"btn ghost"]],true);
    $("psb").onclick=async()=>{
      const v=$("psd").value.trim(),f=$("psf");
      if(!/^[\p{L}\p{N}._-]{2,20}$/u.test(v)){f.textContent=T4("Pseudo : 2 à 20 caractères, sans espace.","Solonanarana: litera 2 ka hatramin’ny 20, tsy misy elanelana.","昵称：2–20 个字符，不含空格。","Nickname: 2–20 characters, no spaces.");return}
      f.textContent="…";
      const r=await IkoAuth.synchroProfil(v,"");
      if(!r||!r.ok){f.textContent=(r&&r.error)||"Erreur";return}
      try{PN=v}catch(_){}
      window.ikzSetPseudo(v);
      $("accn").textContent=v;$("accav").innerHTML=avatar(u,76);
      f.textContent=T4("Pseudo enregistré ✔","Voatahiry ny solonanarana ✔","昵称已保存 ✔","Nickname saved ✔");
    };
    if(window.IkoAuth){
      const r=await IkoAuth.classement(1),x=$("accrk"),me=r&&r.ok&&(r.lignes||[]).find(l=>l.is_me);
      if(x)x.textContent=me?"#"+me.pos:"—";
    }
  }

  /* Connecté : « S’inscrire » ouvre « Mon compte » (bouton du haut + autres appels à mReg) */
  const _mReg=mReg;
  mReg=function(){return ACC?mAccount():_mReg.apply(this,arguments)};
  ACT.reg=function(){return ACC?mAccount():mReg.apply(this,arguments)};

  function init(){
    IkoAuth.surChangement(u=>{
      ACC=u||null;if(!ACC){PSEUDO="";window.IKZ_PSEUDO=""}
      try{REG=ACC?1:0}catch(e){}
      paint();
    });
  }
  if(window.IkoAuth)init();
  else window.addEventListener("ikoauth-ready",init,{once:true});
})();

/* =====================================================================
   🧠 CERVEAU DU CLASSEMENT — des messages de KOTO vivants, pas robotiques
   - Il lit ta vraie situation (rang, écart avec le joueur devant, progression en direct)
     et choisit une phrase adaptée, jamais deux fois la même d'affilée.
   - Aucune pression : pas de « installe l'app avant X jours ». KOTO invite à garder le lien
     pour suivre l'évolution du classement et à suivre la page Facebook.
   - Ta photo de profil Google remplace l'avatar KOTO sur TA ligne du classement.
   - Pour modifier un texte : change-le dans MSG (ordre : FR, MG, ZH, EN).
     {n}=prénom {r}=rang {t}=nb de joueurs {g}=écart en XP {x}=joueur voisin {d}=places gagnées
   ===================================================================== */
(function(){
  const MSG={
    start:[
      ["Bienvenue dans la ligue, {n} ! Tu démarres à la {r}ᵉ place sur {t}. Une seule partie suffit pour décoller. 🚀","Tonga soa eto amin’ny ligy, {n}! Laharana {r} amin’ny {t} ianao izao. Lalao iray ihany dia mitsangana ianao. 🚀","欢迎加入联赛，{n}！你现在排第{r}名（共{t}人）。只要玩一局就能起飞。🚀","Welcome to the league, {n}! You start at #{r} of {t}. One round is all it takes to take off. 🚀"],
      ["{n}, la ligue t’attend ! Pour l’instant {r}ᵉ sur {t} : ta première partie va tout changer.","{n}, miandry anao ny ligy! Laharana {r} amin’ny {t} izao: hanova ny zava-drehetra ny lalao voalohany.","{n}，联赛在等你！目前第{r}名（共{t}人）：第一局就会改变一切。","{n}, the league is waiting! #{r} of {t} for now: your first round will change everything."]],
    lead:[
      ["Tu mènes la ligue, {n} ! 👑 {g} XP d’avance sur {x}. À toi de défendre ta place.","Ianao no mitarika ny ligy, {n}! 👑 {g} XP mialoha an’i {x}. Arovy ny toerana.","{n}，你领跑联赛！👑 领先{x}共{g} XP。守住你的位置吧。","You lead the league, {n}! 👑 {g} XP ahead of {x}. Time to defend your spot."],
      ["Numéro 1, rien que ça ! 👑 {x} te suit à {g} XP : reste concentré, {n}.","Laharana voalohany! 👑 Manaraka anao i {x}, {g} XP monja: mitaova, {n}.","第一名！👑 {x}只落后你{g} XP：保持专注，{n}。","Number 1, no less! 👑 {x} is {g} XP behind: stay sharp, {n}."]],
    podium:[
      ["Sur le podium, {n} ! {r}ᵉ place, à {g} XP de {x}. La première marche est possible. 🥇","Eo amin’ny podium ianao, {n}! Laharana {r}, {g} XP miala amin’i {x}. Azo atao ny laharana voalohany. 🥇","{n}，你登上领奖台了！第{r}名，距{x}还差{g} XP。冠军并非遥不可及。🥇","On the podium, {n}! #{r}, {g} XP from {x}. The top step is within reach. 🥇"]],
    up:[
      ["Belle remontée, {n} ! Tu viens de doubler {d} joueur(s) et te voilà {r}ᵉ. 🔥","Hiakatra tsara, {n}! Nandalo mpilalao {d} ianao, ary laharana {r} ianao izao. 🔥","漂亮的反超，{n}！你超过了{d}位玩家，现在第{r}名。🔥","Great climb, {n}! You just passed {d} player(s) and you’re now #{r}. 🔥"],
      ["{n} grimpe au classement : {r}ᵉ ! Continue sur cette lancée.","Miakatra eo amin’ny laharana i {n}: laharana {r}! Tohizo ity hafainganana ity.","{n}在排名中不断上升：第{r}名！保持这个势头。","{n} is climbing: #{r}! Keep that momentum going."]],
    down:[
      ["Le classement bouge vite, {n} : tu es {r}ᵉ pour l’instant. Une bonne série et tu reprends ta place. 💪","Mihetsika haingana ny laharana, {n}: laharana {r} ianao izao. Andiany tsara iray dia mahazo ny toerana indray ianao. 💪","排名变化很快，{n}：你目前第{r}名。再来一轮好成绩就能夺回位置。💪","The ranking moves fast, {n}: you’re #{r} right now. One good streak and you’re back. 💪"],
      ["Les autres ont accéléré, mais rien n’est joué : {r}ᵉ sur {t}, à {g} XP de {x}.","Nanafingana ny hafa, nefa mbola tsy lany ny lalao: laharana {r} amin’ny {t}, {g} XP miala amin’i {x}.","其他人加速了，但胜负未定：第{r}名（共{t}人），距{x}还差{g} XP。","The others sped up, but nothing is settled: #{r} of {t}, {g} XP behind {x}."]],
    close:[
      ["Plus que {g} XP pour doubler {x}, {n} ! Une bonne réponse et c’est fait. 🎯","{g} XP sisa dia mialoha an’i {x} ianao, {n}! Valiny marina iray dia vita. 🎯","只差{g} XP就能超过{x}了，{n}！答对一题就行。🎯","Only {g} XP to overtake {x}, {n}! One right answer and it’s done. 🎯"],
      ["{x} est à portée de main : {g} XP seulement. Tu le sens venir, {n} ?","Eo akaikin’ny tananao i {x}: {g} XP ihany. Mahatsapa ve ianao, {n}?","{x}近在咫尺：只差{g} XP。{n}，你感觉到了吗？","{x} is within reach: just {g} XP. Can you feel it coming, {n}?"]],
    hold:[
      ["Tu tiens la {r}ᵉ place sur {t}, {n}. Il te manque {g} XP pour passer devant {x}.","Mitazona ny laharana {r} amin’ny {t} ianao, {n}. Mbola {g} XP no ilaina hialoha an’i {x}.","{n}，你稳居第{r}名（共{t}人）。再拿{g} XP就能超过{x}。","You’re holding #{r} of {t}, {n}. Just {g} XP more to pass {x}."],
      ["{r}ᵉ sur {t} : solide, {n}. {x} est juste devant toi, à {g} XP.","Laharana {r} amin’ny {t}: mafy, {n}. Eo alohanao i {x}, {g} XP monja.","第{r}名（共{t}人）：很稳，{n}。{x}就在你前面，仅差{g} XP。","#{r} of {t}: solid, {n}. {x} is right ahead of you, {g} XP away."]]
  };
  /* Phrases de fin : invitation douce, jamais de menace ni de compte à rebours */
  const KEEP=["Garde ce lien pour suivre l’évolution du classement quand tu veux.","Tehirizo ity rohy ity mba hanaraka ny fivoaran’ny laharana amin’ny fotoana rehetra.","留好这个链接，随时来看排名的变化。","Keep this link to follow how the ranking evolves whenever you like."];
  const FB=["Et pour ne rien rater des classements et des nouveautés, suis la page Facebook. 💙","Ary mba tsy hisy ho very amin’ny laharana sy ny vaovao, araho ny pejy Facebook. 💙","想不错过排名和新动态，欢迎关注 Facebook 主页。💙","And to never miss rankings and news, follow the Facebook page. 💙"];

  let PIC="",NAME="",ACCU=null,LASTR=0,TI=null,CUR=null,OPENS=0,PEND=0,BUSY=0,READY=0,TK=0,FIRST=1;const LAST={};
  const clean=s=>String(s||"").replace(/[<>&"]/g,"");
  const fbOK=()=>CONF.facebook&&CONF.facebook!=="#";
  const fill=(s,v)=>s.replace(/\{(\w)\}/g,(_,k)=>v[k]==null?"":v[k]);

  /* photo + nom du compte Google (ou e-mail) */
  function who(u){
    ACCU=u||null;const m=(u&&u.user_metadata)||{},p=m.avatar_url||m.picture||"";
    PIC=/^https:\/\/[^"')\s]+$/.test(p)?p:"";
    NAME=u?clean(String(m.full_name||m.name||m.user_name||(u.email||"").split("@")[0]||"")).trim().split(/\s+/)[0].slice(0,14):"";
  }
  addEventListener("ikz-pseudo",e=>{NAME=String(e.detail||"")});
  document.head.insertAdjacentHTML("beforeend","<style>.rk.real .nm::after{content:' ✔';color:#19e6a2;font-size:.85em}</style>");
  const init=()=>IkoAuth.surChangement(u=>{who(u);if(window.IKZ_PSEUDO)NAME=window.IKZ_PSEUDO;onLogin(u)});
  if(window.IkoAuth)init();else window.addEventListener("ikoauth-ready",init,{once:true});

  /* le cerveau : lit la situation réelle du joueur dans la ligue */
  function state(){
    const rk=RK.slice().sort((a,b)=>b.xp-a.xp),i=rk.findIndex(x=>x.me),you=rk[i],ah=i>0?rk[i-1]:rk[1];
    const g=i>0?ah.xp-you.xp:you.xp-ah.xp,r=i+1;let k;
    if(i===0)k="lead";else if(!you.xp)k="start";else if(i<3)k="podium";
    else if(LASTR&&r<LASTR)k="up";else if(LASTR&&r>LASTR)k="down";else k=g<=40?"close":"hold";
    return{k,r,t:rk.length,g,x:clean(ah.n),d:LASTR?Math.abs(LASTR-r):0};
  }
  function say(s){
    const L=MSG[s.k],j=((LAST[s.k]==null?-1:LAST[s.k])+1)%L.length;LAST[s.k]=j;   /* jamais deux fois la même phrase de suite */
    const v=Object.assign({n:NAME||PN||T4("champion","mpilalao","玩家","champ")},s);
    mSay(()=>fill(T4(...L[j]),v));
    LASTR=s.r;
  }

  /* ---------- XP réellement enregistré pour les joueurs connectés ---------- */
  const _addXP=addXP;
  addXP=function(v){_addXP(v);if(ACCU&&v>0)PEND+=v};
  async function flush(){
    if(BUSY||!READY||!PEND||!ACCU||!window.IkoAuth)return;BUSY=1;
    try{while(PEND>0){const n=Math.min(PEND,200),r=await IkoAuth.ajouterXp(n);if(!r||!r.ok)break;PEND-=n}}finally{BUSY=0}
  }
  setInterval(flush,4000);
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")flush()});
  addEventListener("pagehide",flush);
  async function onLogin(u){
    READY=0;if(!u)return;
    const m=u.user_metadata||{};
    IkoAuth.synchroProfil(clean(m.full_name||m.name||""),PIC);          /* nom + photo dans profiles */
    await new Promise(r=>setTimeout(r,1500));                           /* laisse auth.js réclamer l'XP de la démo (Google) */
    const r=await IkoAuth.lireProfil();
    if(r&&r.ok&&r.profil){const base=XP-PEND;if(r.profil.xp>base)_addXP(r.profil.xp-base);const w=clean(String(r.profil.name||"")).trim().split(/\s+/)[0];if(w&&w!=="Joueur"&&window.ikzSetPseudo)window.ikzSetPseudo(w.slice(0,20))}   /* retrouve ton XP sur un autre appareil */
    READY=1;flush();
  }

  /* ---------- Après l'inscription : accueil + garder le lien + Facebook ---------- */
  const copyLink=async e=>{const b=e&&e.currentTarget,url=location.origin+location.pathname;
    try{if(navigator.share)await navigator.share({title:"IKOIZANA",url});else{await navigator.clipboard.writeText(url);if(b)b.textContent=T4("Lien copié ✔","Voadika ✔","链接已复制 ✔","Link copied ✔")}}catch(_){}};
  const _mRegDone=mRegDone;
  mRegDone=function(em,mode,conf){
    _mRegDone(em,mode,conf);
    if(mode==="in")return;
    const v={n:NAME||PN||clean((em||"").split("@")[0])||T4("champion","mpilalao","玩家","champ")};
    const head=conf
      ?["✅ Compte créé, {n} ! Un e-mail de confirmation t’attend : clique sur le lien pour activer ton compte (pense à vérifier tes spams).","✅ Voaforona ny kaontinao, {n}! Misy mailaka fanamafisana miandry anao: tsindrio ny rohy mba hampiasa ny kaontinao (jereo koa ny spam).","✅ 账号已创建，{n}！确认邮件已发出：点击链接即可激活账号（也请查看垃圾邮件）。","✅ Account created, {n}! A confirmation email is waiting for you: click the link to activate your account (check your spam folder too)."]
      :["✅ Bienvenue dans la famille IKOIZANA, {n} ! Ton compte est créé et ton XP est enregistré. 🙌","✅ Tonga soa ao amin’ny fianakavian’i IKOIZANA, {n}! Voaforona ny kaontinao ary voatahiry ny XP-nao. 🙌","✅ 欢迎加入 IKOIZANA 大家庭，{n}！账号已创建，你的 XP 已保存。🙌","✅ Welcome to the IKOIZANA family, {n}! Your account is created and your XP is saved. 🙌"];
    mSay(()=>fill(T4(...head),v)+" "+fill(T4(...KEEP),v)+(fbOK()?" "+fill(T4(...FB),v):""));
    MB.innerHTML=`<div class="alert"><i class="fa-solid fa-circle-check"></i><div><b>${T4("Compte IKOIZANA","Kaonty IKOIZANA","IKOIZANA 账号","IKOIZANA account")}</b><br>${esc(em)}</div></div>`;
    mBtns([['<i class="fa-solid fa-link"></i>'+T4("Garder le lien","Tehirizo ny rohy","收藏链接","Keep the link"),copyLink,"btn yes"],
           ['<i class="fa-brands fa-facebook-f"></i>'+T4("Suivre la page Facebook","Araho ny pejy Facebook","关注 Facebook 主页","Follow our Facebook page"),CONF.facebook,"btn"]],true);
  };

  /* ---------- Classement : vrais joueurs + photos ---------- */
  const note=n=>ACCU
    ?T4(n+" vrai(s) joueur(s) (✔) · les autres sont des joueurs de démonstration.",n+" mpilalao tena izy (✔) · demo ny hafa.","联赛中有"+n+"位真实玩家（✔）· 其余为演示玩家。",n+" real player(s) (✔) · the others are demo players.")
    :T4("Connecte-toi pour voir les vrais joueurs de la ligue.","Midira mba hahita ny mpilalao tena izy ao amin’ny ligy.","登录后即可看到联赛中的真实玩家。","Log in to see the league’s real players.");
  function applyReal(rows){
    const me=RK.find(x=>x.me),bots=RK.filter(x=>!x.me&&!x.real);
    const real=(rows||[]).filter(r=>!r.is_me).map((r,i)=>{
      const o={id:"u"+i,n:clean(r.name)||"Joueur",c:(i*47)%360,ph:0,real:1,av:/^https:\/\/[^"')\s]+$/.test(r.avatar_url||"")?r.avatar_url:"",_x:r.xp|0};
      Object.defineProperty(o,"xp",{get(){return this._x},set(){}});    /* un vrai joueur ne « gagne » pas d'XP par simulation */
      Object.defineProperty(o,"on",{get(){return false},set(){}});
      return o});
    RK.length=0;RK.push(...real,...bots.slice(0,Math.max(0,14-real.length)),me);
    const f=$("rkfb");if(f&&!f.dataset.cp)f.textContent=note(real.length+1);
    if(FIRST){FIRST=0;LASTR=0;CUR=state();say(CUR)}
  }
  function paintAll(){
    const box=$("rk");if(!box)return;const by={};RK.forEach(p=>by[p.id]=p);
    box.querySelectorAll(".rk").forEach(row=>{const p=by[row.dataset.id];if(!p)return;if(p.real||(p.me&&ACCU))row.classList.add("real");
      const a=row.querySelector(".av"),n=row.querySelector(".nm"),url=p.me?PIC:p.av;
      if(url&&a){a.style.backgroundImage='url("'+url+'")';a.style.backgroundSize="cover";a.style.backgroundPosition="center";a.style.backgroundColor="#0b2a66";a.style.color="transparent"}
      if(p.me&&NAME&&n)n.textContent=NAME});
  }
  const _mRank=mRank;
  mRank=function(){
    _mRank();const rk=$("rk");if(!rk)return;
    OPENS++;TK=0;FIRST=1;new MutationObserver(paintAll).observe(rk,{childList:true});paintAll();
    CUR=state();say(CUR);
    MB.insertAdjacentHTML("beforeend",'<p class="fb" id="rkfb"></p>');$("rkfb").textContent=note(1);
    const load=async()=>{if(!ACCU||!window.IkoAuth)return;const r=await IkoAuth.classement(40);if(r&&r.ok&&$("rk"))applyReal(r.lignes);else if(r&&!r.ok&&$("rkfb"))$("rkfb").textContent="⚠ "+T4("Classement réel indisponible","Tsy azo ampiasaina ny laharana tena izy","真实排名暂不可用","Real ranking unavailable")+" — "+r.error};
    load();
    clearInterval(TI);TI=setInterval(()=>{
      if(!$("rk")||!M.classList.contains("on")){clearInterval(TI);return}
      if(++TK%3===0)load();
      const s=state();if(s.r!==CUR.r){CUR=s;say(s)}
    },3500);
  };
  ACT.compet=mRank;
})();

/* =====================================================================
   CARTES « L'APP » — une carte à la fois, flèches hors du texte, points, « Passer »
   Le bouton Suivant du bas parcourt d'abord les 4 cartes, puis passe à la page suivante :
   impossible de les manquer par hasard, et « Passer › » les saute quand on veut.
   ===================================================================== */
(function(){
  const st=document.createElement("style");
  st.textContent=".car.stp .arr{display:none!important}"
    +".car.stp .hscroll{--ml:0px!important;--mr:0px!important;gap:14px;scroll-snap-type:x mandatory;-webkit-mask-image:none!important;mask-image:none!important}"
    +".car.stp .hscroll>*{flex:0 0 100%!important;width:100%!important;max-width:100%!important;min-width:0;scroll-snap-align:center}"
    +".car.stp .cat{margin-inline:auto}.car.stp .cat img{width:100%;max-height:30vh;object-fit:cover}"
    +".cstep{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:14px;flex-wrap:wrap}"
    +".cstep button{display:inline-flex;align-items:center;justify-content:center;background:transparent;color:#00e5ff;border:1.5px solid #00e5ff;border-radius:50%;width:42px;height:42px;cursor:pointer}"
    +".cstep button:disabled{opacity:.3;cursor:default}"
    +".cstep .cd{display:inline-flex;gap:8px;align-items:center}.cstep .cd i{width:9px;height:9px;border-radius:99px;background:currentColor;opacity:.3;transition:all .25s}"
    +".cstep .cd i.on{width:26px;background:#00e5ff;opacity:1}"
    +".cstep .skip{width:auto;height:auto;border:0;border-radius:0;color:inherit;opacity:.75;text-decoration:underline;padding:6px 10px;font:inherit}";
  document.head.appendChild(st);
  document.querySelectorAll(".car").forEach(w=>{
    const h=w.querySelector(".hscroll");if(!h)return;
    w.classList.add("stp");const K=[...h.children],bar=document.createElement("div");bar.className="cstep";
    bar.innerHTML='<button class="cp" aria-label="‹"><i class="fa-solid fa-chevron-left"></i></button><span class="cd">'+K.map(()=>"<i></i>").join("")+'</span><button class="cn" aria-label="›"><i class="fa-solid fa-chevron-right"></i></button><button class="skip" type="button"></button>';
    w.after(bar);
    const idx=()=>{const r=h.getBoundingClientRect(),cx=r.left+r.width/2;let b=0,d=1e9;K.forEach((c,i)=>{const q=c.getBoundingClientRect(),x=Math.abs(q.left+q.width/2-cx);if(x<d){d=x;b=i}});return b};
    const show=i=>K[Math.max(0,Math.min(K.length-1,i))].scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});
    const upd=()=>{const i=idx();bar.querySelectorAll(".cd i").forEach((d,j)=>d.classList.toggle("on",j===i));
      bar.querySelector(".cp").disabled=i===0;bar.querySelector(".cn").disabled=i===K.length-1;
      bar.querySelector(".skip").textContent=T4("Passer ›","Alefa ›","跳过 ›","Skip ›")};
    h.addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);
    bar.querySelector(".cp").onclick=()=>show(idx()-1);bar.querySelector(".cn").onclick=()=>show(idx()+1);
    bar.querySelector(".skip").onclick=()=>go(cur+1);
    $("lang").addEventListener("click",()=>setTimeout(upd,60));
    const sl=w.closest(".slide"),step=(d,e)=>{if(S[cur]!==sl)return;const i=idx();
      if((d>0&&i<K.length-1)||(d<0&&i>0)){e.stopImmediatePropagation();e.preventDefault();show(i+d)}};
    $("next").addEventListener("click",e=>step(1,e),true);$("prev").addEventListener("click",e=>step(-1,e),true);
    setTimeout(upd,250);
  });
})();

/* =====================================================================
   HISTOIRE SELON LA LANGUE — une seule série de questions à la fois :
   français → histoire de France · anglais → histoire du Royaume-Uni · chinois → histoire de la Chine
   malgache → la série d'origine (monde + Madagascar). Chaque série compte 8 questions.
   Format : [question, bonne réponse, mauvaise 1, mauvaise 2, mauvaise 3]
   ===================================================================== */
(function(){
  const ORIG=CATS.histoire.q;
  const H={
    fr:[["En quelle année a débuté la Révolution française ?","1789","1776","1804","1815"],
        ["Qui fut sacré empereur des Français en 1804 ?","Napoléon Bonaparte","Louis XIV","Louis XVI","Charles de Gaulle"],
        ["Quel roi était surnommé le « Roi-Soleil » ?","Louis XIV","Louis XVI","François Ier","Henri IV"],
        ["Quelle héroïne a été condamnée au bûcher à Rouen en 1431 ?","Jeanne d’Arc","Marie-Antoinette","Catherine de Médicis","Aliénor d’Aquitaine"],
        ["En quelle année a eu lieu le débarquement de Normandie ?","1944","1940","1942","1945"],
        ["Quelle forteresse parisienne a été prise le 14 juillet 1789 ?","La Bastille","Le Louvre","Les Invalides","La Conciergerie"],
        ["Qui a lancé l’appel du 18 juin 1940 depuis Londres ?","Charles de Gaulle","Philippe Pétain","Georges Clemenceau","Jean Moulin"],
        ["En quelle année la Ve République a-t-elle été fondée ?","1958","1946","1969","1945"]],
    en:[["In which year was the Battle of Hastings fought?","1066","1215","1415","1588"],
        ["Which charter, sealed by King John in 1215, limited royal power?","Magna Carta","Domesday Book","Bill of Rights","Act of Union"],
        ["Which queen was on the throne when the Spanish Armada was defeated in 1588?","Elizabeth I","Victoria","Mary I","Anne"],
        ["In which year did the Great Fire of London break out?","1666","1605","1688","1715"],
        ["Who led Britain as Prime Minister for most of the Second World War?","Winston Churchill","Neville Chamberlain","Clement Attlee","Margaret Thatcher"],
        ["Which monarch reigned for 63 years, from 1837 to 1901?","Queen Victoria","Elizabeth I","Queen Anne","George III"],
        ["Which king broke with Rome in the 1530s and founded the Church of England?","Henry VIII","Henry VII","Edward VI","Charles I"],
        ["In which year did the UK vote in a referendum to leave the European Union?","2016","2013","2019","2020"]],
    zh:[["中国历史上第一个统一的多民族封建王朝是？","秦朝","汉朝","唐朝","隋朝"],
        ["下列哪项工程主要是为了抵御北方游牧民族而修建的？","长城","大运河","都江堰","灵渠"],
        ["汉武帝时期两次出使西域、开辟丝绸之路的人是？","张骞","郑和","玄奘","班超"],
        ["明朝初年，哪位航海家曾七次下西洋？","郑和","张骞","鉴真","徐霞客"],
        ["中华人民共和国成立于哪一年？","1949","1911","1945","1978"],
        ["1911 年的辛亥革命推翻了哪个王朝？","清朝","明朝","元朝","宋朝"],
        ["中国古代的“四大发明”不包括下列哪一项？","瓷器","造纸术","印刷术","火药"],
        ["秦始皇陵兵马俑位于今天的哪座城市附近？","西安","北京","洛阳","南京"]]
  };
  Object.defineProperty(CATS.histoire,"q",{get(){return H[LANG]||ORIG},configurable:true});
})();