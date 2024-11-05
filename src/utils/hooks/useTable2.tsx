import { CropData } from "../types";

const useTable2 = (data: CropData[]) => {
  if (!data) return [];

  const cropMap = new Map<string, { yields: number[]; areas: number[] }>();

  // Filter data for years between 1950-2020 and group by crop
  data.forEach((item) => {
    const year = parseInt(item.Year.split(",")[1]);
    if (year >= 1950 && year <= 2020) {
      if (!cropMap.has(item["Crop Name"])) {
        // Initialize the crop entry with empty arrays for yields and areas
        cropMap.set(item["Crop Name"], { yields: [], areas: [] });
      }
      const cropData = cropMap.get(item["Crop Name"])!;
      const yield_value = Number(
        item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
      );
      const area_value = Number(
        item["Area Under Cultivation (UOM:Ha(Hectares))"]
      );

      // Add the yield and area values if they are valid numbers
      if (!isNaN(yield_value)) cropData.yields.push(yield_value);
      if (!isNaN(area_value)) cropData.areas.push(area_value);
    }
  });

  return Array.from(cropMap.entries()).map(([crop, data]) => ({
    crop,
    avgYield: data.yields.length
      ? (data.yields.reduce((a, b) => a + b, 0) / data.yields.length).toFixed(3)
      : "N/A",
    avgArea: data.areas.length
      ? (data.areas.reduce((a, b) => a + b, 0) / data.areas.length).toFixed(3)
      : "N/A",
  }));
};

export default useTable2;
