'use strict';


const content=document.querySelector('.heading_content');
const btn1=document.querySelector('.story');
const btn2=document.querySelector('.skill_last');
const btn3=document.querySelector('.exp');
const under1=document.querySelector('.under1');
const under2=document.querySelector('.under2');
const under3=document.querySelector('.under3');


under1.style.transform='scaleX(1)';



btn1.addEventListener('click',function(){
    under1.style.transform='scaleX(1)';
    under2.style.transform='scaleX(0)';
    under3.style.transform='scaleX(0)';
    content.innerHTML='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur vitae pariatur animi, debitis aliquid quod ipsum? Eveniet repudiandae praesentium expedita fugit totam, veniam distinctio laborum laboriosam optio rem quaerat voluptatibus inventore quisquam, quasi, blanditiis natus esse repellat hic dolores nam corporis sapiente non voluptas dolore. Obcaecati, velit pariatur facilis minus tempora soluta fugit consectetur odit voluptas maxime nisi? Iusto quidem quam atque, neque ipsum nesciunt sint repudiandae nostrum quas aspernatur at corporis modi eius quibusdam expedita ullam dicta ea, illo porro! Natus, excepturi ratione laborum ut quas quae? Expedita deserunt nesciunt quaerat distinctio laborum officia obcaecati repellat quae aut at?';
});

btn2.addEventListener('click',function()
{
    under1.style.transform='scaleX(0)';
    under2.style.transform='scaleX(1)';
    under3.style.transform='scaleX(0)';
    content.innerHTML='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quaerat ipsam, doloremque totam inventore quia quis sit itaque repellat, veniam sed voluptate iste doloribus qui ipsum. Obcaecati, neque. Ad itaque in tenetur, recusandae dignissimos numquam quibusdam, ipsam rem quos dolorum eligendi ducimus doloremque debitis similique consequatur quam necessitatibus! Vitae veritatis numquam non nostrum facilis aliquid accusamus excepturi enim, aliquam tempore doloremque deleniti, nemo aspernatur perferendis odio fugit sunt error quidem! Fuga illo officia, explicabo minima natus, sit et at, harum exercitationem facilis necessitatibus dolorum sunt nulla omnis. Nobis error quasi cumque quis sed exercitationem harum eveniet nostrum. Et pariatur velit dolore molestiae iure, excepturi eius, ipsam animi nemo quasi esse blanditiis natus quisquam nulla illum voluptatum est dolores sunt, illo explicabo. Omnis nihil neque debitis. A eveniet dolores voluptas facilis ea, nam, excepturi doloremque debitis natus nemo earum repudiandae quisquam inventore minima. Velit officia, sapiente ex placeat natus repellendus esse laudantium provident vel ipsum quaerat reprehenderit expedita a exercitationem repudiandae corrupti. Vero commodi excepturi sequi a! Suscipit illum quam modi cumque vel nesciunt commodi expedita blanditiis, eos inventore. Itaque molestias veritatis totam, dolorem, provident voluptate obcaecati ullam ad harum at adipisci recusandae corporis? Alias ipsum nostrum saepe, totam rerum dignissimos?';
});

btn3.addEventListener('click',function(){
    under1.style.transform='scaleX(0)';
    under2.style.transform='scaleX(0)';
    under3.style.transform='scaleX(1)';
    content.innerHTML='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quaerat ipsam, doloremque totam inventore quia quis sit itaque repellat, veniam sed voluptate iste doloribus qui ipsum. Obcaecati, neque. Ad itaque in tenetur, recusandae dignissimos numquam quibusdam, ipsam rem quos dolorum eligendi ducimus doloremque debitis similique consequatur quam necessitatibus! Vitae veritatis numquam non nostrum facilis aliquid accusamus excepturi enim, aliquam tempore doloremque deleniti, nemo aspernatur perferendis odio fugit sunt error quidem! Fuga illo officia, explicabo minima natus, sit et at, harum exercitationem facilis necessitatibus dolorum sunt nulla omnis. Nobis error quasi cumque quis sed exercitationem harum eveniet nostrum. Et pariatur velit dolore molestiae iure, excepturi eius, ipsam animi nemo quasi esse blanditiis natus quisquam nulla illum voluptatum est dolores sunt, illo explicabo. Omnis nihil neque debitis. A eveniet dolores voluptas facilis ea, nam, excepturi doloremque debitis natus nemo earum repudiandae quisquam inventore minima. Velit officia, sapiente ex placeat natus repellendus esse laudantium provident vel ipsum quaerat reprehenderit expedita a exercitationem repudiandae corrupti. Vero commodi excepturi sequi a! Suscipit illum quam modi cumque vel nesciunt commodi expedita blanditiis, eos inventore. Itaque molestias veritatis totam, dolorem, provident voluptate obcaecati ullam ad harum at adipisci recusandae corporis? Alias ipsum nostrum saepe, totam rerum dignissimos?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolor vitae repudiandae necessitatibus consequatur, nihil praesentium recusandae ut placeat laudantium. Quasi, doloribus quia. Doloribus dolore officia porro quo harum, modi, non repellat saepe dicta molestias pariatur ipsam, iste accusamus. Assumenda numquam quae quidem, dicta voluptates voluptatum maiores expedita fugiat inventore?';
});