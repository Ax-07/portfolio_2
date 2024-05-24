import PropTypes from 'prop-types';

export const Arrow = ({type, color, strokeWidth}) => {
    let rotation;
    switch(type) {
        case 'up':
            rotation = 'rotate(-90deg)';
            break;
        case 'down':
            rotation = 'rotate(90deg)';
            break;
        case 'left':
            rotation = 'rotate(180deg)';
            break;
        case 'right':
            rotation = 'rotate(0deg)';
            break;    
        default:
            rotation = 'none';
    }

    if (!color) {
        color = '#026D00';
    }
    if (!strokeWidth) {
        strokeWidth = '2';
    }

    return (
        <div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: rotation }}>
                <g clipPath="url(#clip0_47_670)">
                    <mask id="path-2-inside-1_47_670" fill="white">
                        <path d="M1.6049 8.24934C3.12123 5.24055 5.60638 2.82987 8.65991 1.40577C11.7134 -0.0183413 15.1575 -0.37294 18.4371 0.399107C21.7168 1.17115 24.641 3.02488 26.7386 5.66159C28.8362 8.2983 29.985 11.5644 29.9999 14.9337C30.0147 18.3029 28.8949 21.5791 26.8207 24.2342C24.7465 26.8894 21.8388 28.7689 18.5661 29.5699C15.2934 30.3709 11.8464 30.0468 8.78035 28.6498C5.71435 27.2527 3.20799 24.8641 1.66512 21.8688L2.9986 21.1819C4.38719 23.8777 6.64292 26.0274 9.40232 27.2848C12.1617 28.5421 15.2641 28.8339 18.2095 28.1129C21.1549 27.392 23.7718 25.7005 25.6386 23.3108C27.5054 20.9212 28.5133 17.9726 28.4999 14.9403C28.4865 11.908 27.4525 8.96847 25.5647 6.59543C23.6769 4.22239 21.0451 2.55404 18.0934 1.8592C15.1417 1.16435 12.0421 1.48349 9.29392 2.76519C6.54574 4.04689 4.30911 6.21649 2.94441 8.92441L1.6049 8.24934Z"/>
                    </mask>
                    <path d="M1.6049 8.24934C3.12123 5.24055 5.60638 2.82987 8.65991 1.40577C11.7134 -0.0183413 15.1575 -0.37294 18.4371 0.399107C21.7168 1.17115 24.641 3.02488 26.7386 5.66159C28.8362 8.2983 29.985 11.5644 29.9999 14.9337C30.0147 18.3029 28.8949 21.5791 26.8207 24.2342C24.7465 26.8894 21.8388 28.7689 18.5661 29.5699C15.2934 30.3709 11.8464 30.0468 8.78035 28.6498C5.71435 27.2527 3.20799 24.8641 1.66512 21.8688L2.9986 21.1819C4.38719 23.8777 6.64292 26.0274 9.40232 27.2848C12.1617 28.5421 15.2641 28.8339 18.2095 28.1129C21.1549 27.392 23.7718 25.7005 25.6386 23.3108C27.5054 20.9212 28.5133 17.9726 28.4999 14.9403C28.4865 11.908 27.4525 8.96847 25.5647 6.59543C23.6769 4.22239 21.0451 2.55404 18.0934 1.8592C15.1417 1.16435 12.0421 1.48349 9.29392 2.76519C6.54574 4.04689 4.30911 6.21649 2.94441 8.92441L1.6049 8.24934Z" fill={color} stroke={color} strokeWidth={strokeWidth} mask="url(#path-2-inside-1_47_670)"/>
                    <path d="M20.7071 15.7071C21.0976 15.3166 21.0976 14.6834 20.7071 14.2929L14.3431 7.92893C13.9526 7.53841 13.3195 7.53841 12.9289 7.92893C12.5384 8.31946 12.5384 8.95262 12.9289 9.34315L18.5858 15L12.9289 20.6569C12.5384 21.0474 12.5384 21.6805 12.9289 22.0711C13.3195 22.4616 13.9526 22.4616 14.3431 22.0711L20.7071 15.7071ZM19 16H20V14H19V16Z" fill={color}/>
                    <path d="M10 15L5.5 17.5981L5.5 12.4019L10 15Z" fill={color}/>
                </g>
                <defs>
                    <clipPath id="clip0_47_670">
                        <rect width="30" height="30" rx="15" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>

    );
};

Arrow.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    strokeWidth: PropTypes.string
};
