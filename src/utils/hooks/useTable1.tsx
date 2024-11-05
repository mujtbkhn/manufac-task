import { CropData } from "../types";

const useTable1 = (data: CropData[]) => {
  if (!data) return []; //return if there isn't any data

  const yearMap = new Map<string, CropData[]>();

  // Group data by year
  data.forEach((item) => {
    if (!yearMap.has(item.Year)) {
      // If the yearMap doesn't have the Year, initialize it with an empty array
      yearMap.set(item.Year, []);
    } // Push the item into the array corresponding to the year
    yearMap.get(item.Year)!.push(item);
  });

  // Process data for each year
  return Array.from(yearMap.entries()).map(([year, crops]) => {
    // Filter out crops with empty production values
    const validCrops = crops.filter(
      (crop) => crop["Crop Production (UOM:t(Tonnes))"] !== ""
    ); // Find the crop with maximum production in the year
    const maxCrop = validCrops.reduce((max, crop) =>
      Number(crop["Crop Production (UOM:t(Tonnes))"]) >
      Number(max["Crop Production (UOM:t(Tonnes))"])
        ? crop
        : max
    );
    // Find the crop with minimum production in the year
    const minCrop = validCrops.reduce((min, crop) =>
      Number(crop["Crop Production (UOM:t(Tonnes))"]) <
      Number(min["Crop Production (UOM:t(Tonnes))"])
        ? crop
        : min
    );

    return {
      year,
      maxCrop: maxCrop["Crop Name"],
      minCrop: minCrop["Crop Name"],
    };
  });
};

export default useTable1;
