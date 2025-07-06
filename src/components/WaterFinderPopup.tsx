import React from 'react';

interface WaterFinderPopupProps {
  stationName: string;
  description: string;
  address?: string;
  onGetDirections: () => void;
}

const WaterFinderPopup: React.FC<WaterFinderPopupProps> = ({
  stationName,
  description,
  address,
  onGetDirections,
}) => {
  return (
    <div className="p-2 text-sm max-w-[200px] text-left space-y-1">
      <div className="text-base font-semibold text-water-blue">{stationName}</div>
      <p className="text-muted-foreground">{description}</p>
      {address && <p className="text-xs text-foreground">{address}</p>}
    </div>
  );
};

export default WaterFinderPopup;
