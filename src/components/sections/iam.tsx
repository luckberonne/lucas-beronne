'use client'
import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Typewriter from 'typewriter-effect';



const IAM: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-col-1 gap-4 items-center justify-center">
            <div className="col-span-1 grid-rows-4">
                <div className="row-span-2 my-4">
                    <h1 className="text-7xl">
                        Hola, soy
                    </h1>
                    <h1 className="text-7xl">
                        Lucas Beronne
                    </h1>
                </div>
                <div className="row-span-1 min-h-10 text-xl">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Desarrollador Full-Stack!')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(200)
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    />
                </div>
                <div className="row-span-1 flex gap-4">
                    <div className="flex justify-center items-center h-14 w-14 rounded-md bg-blue-700">
                        <a href="https://www.linkedin.com/in/lucas-beronne/" target="_blank">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                    <div className="flex justify-center items-center h-14 w-14 rounded-md bg-red-700">
                        <a href="mailto:lucasberonne@gmail.com">
                            <SiGmail size={24} />
                        </a>
                    </div>
                    <div className="flex justify-center items-center h-14 w-14 rounded-md bg-gray-700">
                        <a href="https://github.com/luckberonne" target="_blank">
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <div className="flex justify-center items-center h-14 w-14 rounded-md bg-green-700">
                        <FaDownload size={24} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 hidden lg:block">
                <div className="h-[35rem] w-[35rem]">
                    <svg id="6088ba52-b752-42bb-ac91-0a74df332082" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900.94 787"><defs><linearGradient id="33dd52eb-d837-4874-aadb-63a17bd6edfc" x1="611.05" y1="646" x2="611.05" y2="103.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"></stop><stop offset="0.54" stop-color="gray" stop-opacity="0.12"></stop><stop offset="1" stop-color="gray" stop-opacity="0.1"></stop></linearGradient></defs><title>coding</title><rect x="763.63" y="283" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="767.63" y="316" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="724.63" y="87" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="761.63" y="118" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="661.63" y="89" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="828.63" y="149" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="765.63" y="151" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="698.63" y="120" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="825.63" y="357" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="762.63" y="359" width="52" height="27" fill="#757575" opacity="0.2"></rect><path d="M280.17,332.5s73.29,73.29,31.92,182S383,804.14,383,804.14s-1.2-.18-3.43-.57C229.05,777,154.26,604.85,238,477,269.08,429.41,294.62,373.64,280.17,332.5Z" transform="translate(-149.42 -56.5)" fill="#4caf50"></path><path d="M280.17,332.5s41.37,89.84,0,163.12-7.09,279,102.84,308.52" transform="translate(-149.42 -56.5)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"></path><path d="M149.63,628.92s83.63-13.32,91.25,61.63S401.7,775.89,401.7,775.89s-1,.68-2.87,1.91c-126.49,83-247.4,52.89-229.17-57.36C176.43,679.45,175.87,638.28,149.63,628.92Z" transform="translate(-149.42 -56.5)" fill="#4caf50"></path><path d="M149.63,628.92s83.63-13.32,91.25,61.63S401.7,775.89,401.7,775.89s-1,.68-2.87,1.91c-126.49,83-247.4,52.89-229.17-57.36C176.43,679.45,175.87,638.28,149.63,628.92Z" transform="translate(-149.42 -56.5)" fill="#f5f5f5" opacity="0.2"></path><path d="M149.63,628.92s64.91,14.25,59.58,73.27S305.61,832,401.7,775.89" transform="translate(-149.42 -56.5)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"></path><rect x="0.63" y="284" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="37.63" y="315" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="318.63" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="728.63" y="498" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="41.63" y="348" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="355.63" y="31" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="165.63" y="214" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="202.63" y="245" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="301.63" y="228" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="206.63" y="278" width="52" height="27" fill="#757575" opacity="0.2"></rect><rect x="798.63" y="498" width="52" height="27" fill="#757575" opacity="0.2"></rect><path d="M503.71,57.57h0a75.57,75.57,0,0,1,75.57,75.57v32.24a0,0,0,0,1,0,0H428.14a0,0,0,0,1,0,0V133.14A75.57,75.57,0,0,1,503.71,57.57Z" fill="#111111"></path><ellipse cx="504.24" cy="175.95" rx="86.14" ry="59.19" fill="#111111"></ellipse><path d="M598.44,289.79s18,94.07,0,119.44,55,35.41,55,35.41L729,417.16l10.57-67.65s-46-25.9-36.47-78.22Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"></path><path d="M821.46,606.89s4.76,20.61-21.14,24.31a146.45,146.45,0,0,1-46.08-.55l-5.71-51.77h60.25Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"></path><path d="M364.12,580.51S352.68,627,378.58,631.2s121,4.23,121,4.23v-55l-43.06,9.2L416.1,550.87Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"></path><path d="M604,320.18l-101.21,21.4s-38.58,1.59-63.42,52.85-78.75,197.66-78.75,197.66,46-46.51,99.89,3.17l35.94-65-7.93,103.06H767V584.69s58.13,31.18,53.91,48.62c0,0,49.75-128.18,39-186.43a396.18,396.18,0,0,1-5.94-54.5h0a73,73,0,0,0-51.38-66.67c-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75,0-75,0s-11.57,37.64-11.36,54.7c.26,21.93-31.18,36.47-31.18,36.47s-46.51-11.1-48.62-20.08S600.28,330.75,604,320.18Z" transform="translate(-149.42 -56.5)" opacity="0.1"></path><path d="M604,318.07l-101.21,21.4s-38.58,1.59-63.42,52.85S360.61,590,360.61,590s46-46.51,99.89,3.17l35.94-65L488.51,631.2H767V582.58s58.13,31.18,53.91,48.62c0,0,49.75-128.18,39-186.43a396.18,396.18,0,0,1-5.94-54.5h0a73,73,0,0,0-51.38-66.67c-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75,0-75,0s-11.57,37.64-11.36,54.7c.26,21.93-31.18,36.47-31.18,36.47s-46.51-11.1-48.62-20.08S600.28,328.64,604,318.07Z" transform="translate(-149.42 -56.5)" fill="#607d8b"></path><path d="M707.42,313.58a71.53,71.53,0,0,1-2.76-37.52L600,294.55s1.51,7.91,3.22,19.76a71.86,71.86,0,0,0,104.18-.73Z" transform="translate(-149.42 -56.5)" opacity="0.1"></path><path d="M725.27,259.67a71.88,71.88,0,0,1-143.73,1.74c0-.58,0-1.16,0-1.74a71.89,71.89,0,0,1,40.29-64.59q3.23-1.58,6.64-2.84a72.39,72.39,0,0,1,37-3.44h0a71.82,71.82,0,0,1,59.61,66.1Q725.27,257.27,725.27,259.67Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"></path><g opacity="0.1"><path d="M628.36,193.93l.1-.06q-3.41,1.26-6.64,2.84a71.89,71.89,0,0,0-40.29,64.59c0,.58,0,1.16,0,1.74a16,16,0,0,0,6.45-1.55c17.52-8.18,28-33.2,32.16-50.65C621.64,204.59,623.05,197.55,628.36,193.93Z" transform="translate(-149.42 -56.5)"></path><path d="M683.37,195.94a71.28,71.28,0,0,0-17.87-5.51,23.06,23.06,0,0,1,12.83,8.06,32.86,32.86,0,0,1,3.93,7,72.07,72.07,0,0,0-60.45,1.25c4.51,9.89,18.5,15.28,27.84,18.89q15.34,5.92,31,10.83l-9.24-7.5,20.87,3.32a36.15,36.15,0,0,0-1.46-12.3c4,3.22,9.3,4.3,13.64,7,8.13,5.13,11.52,15,15.95,23.55,1.17,2.26,2.55,4.57,4.66,6A71.91,71.91,0,0,0,683.37,195.94Z" transform="translate(-149.42 -56.5)"></path></g><path d="M628.36,192.3l.1-.06q-3.41,1.26-6.64,2.84a71.89,71.89,0,0,0-40.29,64.59c0,.58,0,1.16,0,1.74a16,16,0,0,0,6.45-1.55c17.52-8.18,28-33.2,32.16-50.65C621.64,203,623.05,195.93,628.36,192.3Z" transform="translate(-149.42 -56.5)" fill="#000"></path><path d="M683.37,194.32a71.28,71.28,0,0,0-17.87-5.51,23.06,23.06,0,0,1,12.83,8.06,32.86,32.86,0,0,1,3.93,7,72.07,72.07,0,0,0-60.45,1.25c4.51,9.89,18.5,15.28,27.84,18.89q15.34,5.92,31,10.83l-9.24-7.5,20.87,3.32a36.15,36.15,0,0,0-1.46-12.3c4,3.22,9.3,4.3,13.64,7,8.13,5.13,11.52,15,15.95,23.55,1.17,2.26,2.55,4.57,4.66,6A71.91,71.91,0,0,0,683.37,194.32Z" transform="translate(-149.42 -56.5)" fill="#000"></path><path d="M573.33,247.82s74-92,159.61,0l-7.4-20.61s-40.17-58.66-68.7-46-56.55,21.67-56.55,21.67Z" transform="translate(-149.42 -56.5)" opacity="0.1"></path><path d="M573.33,246.19s74-92,159.61,0l-7.4-20.61s-40.17-58.66-68.7-46-56.55,21.67-56.55,21.67Z" transform="translate(-149.42 -56.5)" fill="#111111"></path><path d="M512.55,444.38s-15.85,42.28,6.34,80.33-19.55,53.91-19.55,53.91" transform="translate(-149.42 -56.5)" opacity="0.1"></path><path d="M769.4,406.33s27.48,34.88,9.51,66.06S762,578.62,762,578.62" transform="translate(-149.42 -56.5)" opacity="0.1"></path><path d="M338.82,553.3H644.29a25.37,25.37,0,0,1,25.37,25.37v0a0,0,0,0,1,0,0H313.46a0,0,0,0,1,0,0v0A25.37,25.37,0,0,1,338.82,553.3Z" fill="#535461"></path><path d="M369.9,378.89H613.22a39,39,0,0,1,39,39V559.11a0,0,0,0,1,0,0H330.9a0,0,0,0,1,0,0V417.89A39,39,0,0,1,369.9,378.89Z" fill="#535461"></path><circle cx="491.29" cy="476.93" r="19.03" fill="#fff"></circle><path d="M577.56,204.7s72.72-72.68,151.15-1.33" transform="translate(-149.42 -56.5)" fill="none" stroke="#000" stroke-miterlimit="10" opacity="0.1"></path><rect x="590.36" y="143.57" width="7.3" height="41.39" fill="#424242"></rect><path d="M580.62,170.35h0a25.16,25.16,0,0,1,25.16,25.16v1.62a25.16,25.16,0,0,1-25.16,25.16h0a0,0,0,0,1,0,0V170.35a0,0,0,0,1,0,0Z" fill="#000"></path><rect x="575.75" y="167.92" width="11.36" height="56.81" rx="5.68" ry="5.68" fill="#424242"></rect><rect x="558.44" y="200.88" width="7.3" height="41.39" transform="translate(974.76 386.65) rotate(-180)" fill="#424242"></rect><path d="M550.32,227.66h0a25.16,25.16,0,0,1,25.16,25.16v1.62a25.16,25.16,0,0,1-25.16,25.16h0a0,0,0,0,1,0,0V227.66A0,0,0,0,1,550.32,227.66Z" transform="translate(976.38 450.76) rotate(180)" fill="#000"></path><rect x="568.99" y="225.23" width="11.36" height="56.81" rx="5.68" ry="5.68" transform="translate(999.92 450.76) rotate(-180)" fill="#424242"></rect><path d="M738.92,155.83c-9.89-20.56-31.43-45.42-77.86-47.41v-.06l-.56,0h0l-16.45.78v.08c-46.12,2.12-67.56,26.89-77.42,47.38A106.59,106.59,0,0,0,556.41,201l5.68-.14,5.68-.13A96.65,96.65,0,0,1,577,161.21c12.52-25.72,35.56-39.39,68.47-40.66h0l14.55-.81h0C692.95,121,716,134.69,728.51,160.4a96.65,96.65,0,0,1,9.25,39.54l5.68.13,5.68.14A106.59,106.59,0,0,0,738.92,155.83Z" transform="translate(-149.42 -56.5)" fill="#000"></path><rect x="74.28" y="579" width="774.71" height="208" fill="#d6d6e3"></rect><rect x="74.28" y="593" width="774.71" height="27" opacity="0.1"></rect><rect x="22.31" y="576" width="878.63" height="27" fill="#d6d6e3"></rect></svg>
                </div>
            </div>
        </div>
    );
};

export default IAM;