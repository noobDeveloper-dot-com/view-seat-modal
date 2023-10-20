const SEAT_IMAGES = document.querySelectorAll(".seat_image");

SEAT_IMAGES.forEach((seat) => {
  seat.innerHTML = `<svg  viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7275 16.5867C17.0579 17.7745 16.2418 18.8798 15.1001 19.5391L14.6143 19.6118C14.1965 19.1949 13.1861 19.3306 13.395 18.3223C13.5624 17.9454 13.8016 17.6045 14.0994 17.3188C14.4443 16.7467 14.1528 16.514 13.6136 16.4171C10.8251 16.3492 8.04145 16.3734 5.26267 16.4171C4.54368 16.4171 3.58664 16.0777 3.2903 17.2121C2.54703 17.8472 3.57693 17.8763 3.64008 18.2399C3.94128 19.287 2.92595 19.2094 2.4693 19.5972C0.63783 19.3888 -0.066574 18.1138 0.122888 16.5577C0.608689 12.4516 -0.202595 8.37454 0.0500211 4.27814C0.234625 1.31128 1.02161 0.346566 3.93641 0.312632C7.15241 0.269001 10.3733 0.283545 13.5941 0.312632C15.4596 0.312632 16.9316 0.899221 16.9947 3.11952" fill="#3762CB"/>
    <path d="M2.46448 19.5827C2.75596 19.0688 3.50895 18.8604 3.43608 18.1283C6.74353 17.0051 10.3304 17.0051 13.6379 18.1283C13.5699 18.8798 14.3326 19.0979 14.6095 19.6118C10.5645 19.8538 6.50828 19.8441 2.46448 19.5827Z" fill="#3B65CF"/>
    <path d="M8.54656 12.311C2.4692 12.311 2.46918 12.311 2.46918 6.30941C2.46918 2.62507 2.46919 2.62508 6.20014 2.62023C8.2988 2.62023 10.3975 2.69295 12.4913 2.62023C14.0021 2.55236 14.7356 2.97412 14.6336 4.63207C14.5292 6.56009 14.5292 8.49234 14.6336 10.4204C14.7065 11.9183 14.1138 12.4419 12.6564 12.3595C11.2913 12.2431 9.91652 12.311 8.54656 12.311Z" fill="#4670C5"/>
    <path d="M3.0473 17.566C2.0757 16.3055 2.38176 15.6899 3.98005 15.6947H14.5413C15.3964 17.4545 14.1624 17.5708 12.9722 17.5999C9.94568 17.6726 6.91914 17.5757 3.89261 17.6532C3.75335 17.698 3.60627 17.7134 3.46074 17.6984C3.31521 17.6834 3.17442 17.6383 3.0473 17.566Z" fill="#98BEF7"/>
    <path d="M3.35345 17.5902C6.52088 16.897 9.72716 17.4205 12.914 17.2897C14.0119 17.246 14.8863 17.1588 14.5414 15.7141C15.343 16.3443 15.2701 16.9939 14.5852 17.6532C10.8503 18.0444 7.08365 18.0232 3.35345 17.5902Z" fill="#3B65CF"/>
    <path d="M3.35345 17.5903L14.5852 17.6581C14.49 17.8263 14.3467 17.9623 14.1736 18.0487C14.0005 18.135 13.8055 18.1679 13.6136 18.1429H3.41174L2.77533 17.9442C2.85792 17.823 2.93564 17.7018 3.01823 17.5854C3.12814 17.5551 3.24447 17.5568 3.35345 17.5903Z" fill="#2E59C6"/>
    </svg>
    `;
});
