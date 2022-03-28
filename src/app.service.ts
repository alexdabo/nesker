import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <div class="flex flex-col space-y-5 w-screen h-screen items-center justify-center bg-gray-100">
      <main class="text-center text-white bg-blue-700 rounded-md shadow-md">
        <div class="container p-6">
          <div class="">
            <p class="flex justify-center items-center">
              <span id="app"></span>
            </p>
          </div>
        </div>
        <div id="description" class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);"></div>
      </main>
    </div>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
    
      fetch('/app').then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(data => {
        const app = document.getElementById('app')
        app.innerText=data.name && data.version ?data.name+'@'+data.version:''


        const description = document.getElementById('description')
        description.innerText=data.description||''
      });
    </script>`;
  }

  getInfo(): Object {
    return ({
      name: process.env.APP_NAME, version: process.env.APP_VERSION,
      description: process.env.APP_DESCRIPTION
    })
  }
}
