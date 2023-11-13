import React from 'react';

interface SkeletonProps {
	width?: string;
	height?: string;
	className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = 'w-64', height = 'h-4', className }) => {
	return <div className={`${className} ${width} ${height} bg-gray-300 animate-pulse rounded-md`}></div>;
};

export default Skeleton;
