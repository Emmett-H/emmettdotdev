const CinchLogo: React.FC<React.SVGProps<SVGSVGElement> & { width?: number; height?: number }> = ({ width = 125, height = 54, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 125 54" {...props}>

        <path
            fill="currentColor"
            d="M19.49 8.877a3.992 3.992 0 0 1-3.988-3.988C15.502 2.69 17.29.9 19.49.9c2.2 0 3.988 1.789 3.988 3.988 0 2.2-1.789 3.99-3.988 3.99Zm0-6.577a2.59 2.59 0 0 0-2.588 2.588 2.59 2.59 0 0 0 2.588 2.588 2.59 2.59 0 0 0 2.588-2.588A2.59 2.59 0 0 0 19.49 2.3Z"
        />
        <path fill="currentColor" d="M54.066 21.082a4.991 4.991 0 0 1-4.04 2.061 5.002 5.002 0 0 1-4.997-4.996 5.001 5.001 0 0 1 4.996-4.996 4.99 4.99 0 0 1 4.04 2.061l3.04-2.537a8.94 8.94 0 0 0-7.08-3.48c-4.936 0-8.951 4.016-8.951 8.951 0 4.936 4.016 8.953 8.951 8.953a8.941 8.941 0 0 0 7.08-3.48l-3.04-2.537Zm-41.073 0a4.99 4.99 0 0 1-4.04 2.061 5.002 5.002 0 0 1-4.997-4.996 5.002 5.002 0 0 1 4.997-4.996 4.99 4.99 0 0 1 4.04 2.061l3.04-2.537a8.941 8.941 0 0 0-7.08-3.48C4.016 9.195 0 13.212 0 18.148 0 23.085 4.016 27.1 8.953 27.1a8.94 8.94 0 0 0 7.08-3.48l-3.04-2.538Zm4.519-10.517h3.955V26.8h-3.955V10.565ZM39.684 26.8h-3.956v-9.23c0-.613-.088-1.773-.676-2.655-.655-.984-1.841-1.462-3.626-1.462-1.836 0-3.068.63-3.663 1.462-.574.801-.639 1.81-.639 2.655v9.23h-3.956v-9.23c0-1.388.142-3.435 1.376-5.161 1.38-1.932 3.696-2.911 6.882-2.911 2.175 0 5.142.56 6.918 3.223 1.107 1.661 1.34 3.555 1.34 4.85v9.229ZM73.66 12.72c-1.776-2.665-4.743-3.223-6.918-3.223-1.68 0-3.116.272-4.302.812V5.821h-3.956V26.8h3.956v-9.23c0-.844.066-1.854.639-2.655.595-.833 1.827-1.462 3.663-1.462 1.785 0 2.97.478 3.626 1.462.588.882.675 2.042.675 2.655v9.23H75v-9.23c0-1.294-.233-3.188-1.34-4.849Z" />
    </svg>
)
export default CinchLogo