export default function HomePage() {
  return {
    view: function() {
      return `
         <div style="font-family: arial; text-align: center; margin: 10%;">
            <svg width="199" height="123" viewBox="0 0 199 123" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g style="mix-blend-mode:darken" filter="url(#filter0_i)">
              <path d="M10.9962 65.768C9.33225 65.768 8.02025 65.368 7.06025 64.568C6.13225 63.768 5.66825 62.728 5.66825 61.448C5.66825 60.328 5.97225 59.288 6.58025 58.328C7.18825 57.368 8.03625 56.616 9.12425 56.072C10.2442 55.496 11.4762 55.208 12.8202 55.208C14.4522 55.208 15.7322 55.624 16.6603 56.456C17.6203 57.256 18.1003 58.312 18.1003 59.624C18.1003 60.744 17.7962 61.768 17.1882 62.696C16.5802 63.624 15.7322 64.376 14.6442 64.952C13.5562 65.496 12.3402 65.768 10.9962 65.768ZM15.8923 67.928L11.0922 95H0.436249L5.23625 67.928H15.8923Z" fill="#396788"/>
              <path d="M85.697 27.32L62.369 95H38.273L14.849 27.32H35.009L50.369 76.184L65.633 27.32H85.697ZM113.544 68.072V95H104.088V91.16C103.288 92.376 102.184 93.368 100.776 94.136C99.3678 94.872 97.7517 95.24 95.9277 95.24C92.7917 95.24 90.3117 94.216 88.4877 92.168C86.6957 90.088 85.7997 87.272 85.7997 83.72V68.072H95.1597V82.52C95.1597 84.056 95.5597 85.272 96.3597 86.168C97.1917 87.032 98.2797 87.464 99.6237 87.464C101 87.464 102.088 87.032 102.888 86.168C103.688 85.272 104.088 84.056 104.088 82.52V68.072H113.544ZM143.186 81.224C143.186 81.96 143.138 82.696 143.042 83.432H125.234C125.33 84.904 125.73 86.008 126.434 86.744C127.17 87.448 128.098 87.8 129.218 87.8C130.786 87.8 131.906 87.096 132.578 85.688H142.61C142.194 87.544 141.378 89.208 140.162 90.68C138.978 92.12 137.474 93.256 135.65 94.088C133.826 94.92 131.81 95.336 129.602 95.336C126.946 95.336 124.578 94.776 122.498 93.656C120.45 92.536 118.834 90.936 117.65 88.856C116.498 86.776 115.922 84.328 115.922 81.512C115.922 78.696 116.498 76.264 117.65 74.216C118.802 72.136 120.402 70.536 122.45 69.416C124.53 68.296 126.914 67.736 129.602 67.736C132.258 67.736 134.61 68.28 136.658 69.368C138.706 70.456 140.306 72.024 141.458 74.072C142.61 76.088 143.186 78.472 143.186 81.224ZM133.586 78.872C133.586 77.72 133.202 76.824 132.434 76.184C131.666 75.512 130.706 75.176 129.554 75.176C128.402 75.176 127.458 75.496 126.722 76.136C125.986 76.744 125.506 77.656 125.282 78.872H133.586ZM155.004 72.824C156.06 71.288 157.34 70.072 158.844 69.176C160.348 68.28 161.964 67.832 163.692 67.832V77.864H161.052C159.004 77.864 157.484 78.264 156.492 79.064C155.5 79.864 155.004 81.256 155.004 83.24V95H145.596V68.072H155.004V72.824Z" fill="#ABFFBE"/>
              <path d="M169.753 95.384C168.313 95.384 167.129 94.968 166.201 94.136C165.305 93.272 164.857 92.216 164.857 90.968C164.857 89.688 165.305 88.616 166.201 87.752C167.129 86.888 168.313 86.456 169.753 86.456C171.161 86.456 172.313 86.888 173.209 87.752C174.137 88.616 174.601 89.688 174.601 90.968C174.601 92.216 174.137 93.272 173.209 94.136C172.313 94.968 171.161 95.384 169.753 95.384ZM186.422 83.912C185.882 83.912 185.438 83.756 185.09 83.444C184.754 83.12 184.586 82.724 184.586 82.256C184.586 81.776 184.754 81.38 185.09 81.068C185.438 80.744 185.882 80.582 186.422 80.582C186.95 80.582 187.382 80.744 187.718 81.068C188.066 81.38 188.24 81.776 188.24 82.256C188.24 82.724 188.066 83.12 187.718 83.444C187.382 83.756 186.95 83.912 186.422 83.912ZM187.97 96.296C187.97 97.532 187.658 98.42 187.034 98.96C186.41 99.512 185.54 99.788 184.424 99.788H183.218V97.178H183.956C184.292 97.178 184.532 97.112 184.676 96.98C184.82 96.848 184.892 96.632 184.892 96.332V84.956H187.97V96.296ZM193.729 95.144C192.853 95.144 192.073 94.994 191.389 94.694C190.705 94.394 190.165 93.986 189.769 93.47C189.373 92.942 189.151 92.354 189.103 91.706H192.145C192.181 92.054 192.343 92.336 192.631 92.552C192.919 92.768 193.273 92.876 193.693 92.876C194.077 92.876 194.371 92.804 194.575 92.66C194.791 92.504 194.899 92.306 194.899 92.066C194.899 91.778 194.749 91.568 194.449 91.436C194.149 91.292 193.663 91.136 192.991 90.968C192.271 90.8 191.671 90.626 191.191 90.446C190.711 90.254 190.297 89.96 189.949 89.564C189.601 89.156 189.427 88.61 189.427 87.926C189.427 87.35 189.583 86.828 189.895 86.36C190.219 85.88 190.687 85.502 191.299 85.226C191.923 84.95 192.661 84.812 193.513 84.812C194.773 84.812 195.763 85.124 196.483 85.748C197.215 86.372 197.635 87.2 197.743 88.232H194.899C194.851 87.884 194.695 87.608 194.431 87.404C194.179 87.2 193.843 87.098 193.423 87.098C193.063 87.098 192.787 87.17 192.595 87.314C192.403 87.446 192.307 87.632 192.307 87.872C192.307 88.16 192.457 88.376 192.757 88.52C193.069 88.664 193.549 88.808 194.197 88.952C194.941 89.144 195.547 89.336 196.015 89.528C196.483 89.708 196.891 90.008 197.239 90.428C197.599 90.836 197.785 91.388 197.797 92.084C197.797 92.672 197.629 93.2 197.293 93.668C196.969 94.124 196.495 94.484 195.871 94.748C195.259 95.012 194.545 95.144 193.729 95.144Z" fill="black"/>
              </g>
              <a href="mailto:aciforcharles@gmail.com">
              <rect fill="black" fill-opacity="0" x="0.436249" y="-10.5" width="198.134" height="144"/>
              </a>
              <defs>
              <filter id="filter0_i" x="0.436249" y="27.32" width="202.36" height="75.468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="5" dy="3"/>
              <feGaussianBlur stdDeviation="2.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
              </filter>
              </defs>
              </svg>
              <h3>Welcome to iVuer.js</h3>
            <p>iVuer.js is an Open Source MVC FromeWork build using JavaScript</p>
         </div>
      `;
    }
  };
}
