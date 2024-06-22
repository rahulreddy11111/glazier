import React from "react";
import { View, StyleSheet , Dimensions  } from "react-native";
//import { BarChart } from "react-native-chart-kit";
//import { LinearGradient } from 'react-native-svg';
import { LineChart } from "react-native-chart-kit";



const chartConfig = {
  backgroundGradientFrom: "#1cb5ba",
  backgroundGradientTo: "#1cb5ba",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  yAxisLabel: "L",
  yAxisInterval: 80,
  propsForBackgroundLines: {
    strokeDasharray: [5, 5], // Set a dash pattern to create a dashed line
    stroke: "#1cb5ba", // Set a color for the vertical lines
    fill: "rgba(38, 246, 252, 0.3)", // Fill color for the area under the line
  },
  propsForDots: {
    r: "4",
    strokeWidth: "4",
    stroke: "#ffffff", // Border color (white)
    fill: "#82439c", // Inner color (black)
  },

  style: {
    borderRadius: 10, // Optional: Add a border radius to the chart container
  },
  xAxis: {
    labelStyle: {
      color: "#fff",
      fontWeight: "800",
      fontFamily: "customFont",
    },
    contentInset: { left: 15, right: 15 }, // Adjust the left and right content inset to move the labels
  },
  yAxis: {
    labelStyle: {
      color: "#fff",
      fontWeight: "800",
      fontFamily: "customFont",
    },
  },
};


interface GraphWaterProps {
  monthlyData: number[];
  selectedTimeFrame: string;
}

const GraphWater = ({ monthlyData, selectedTimeFrame }: GraphWaterProps) => {
  let labels: string[] = [];

  if (selectedTimeFrame === "Monthly") {
    labels = ["JAN", "FEB", "MAR", "ARP", "MAY", "JUN"];
  } else if (selectedTimeFrame === "Weekly") {
    labels = ["W 1", "W 2", "W 3", "W 4"];
  } else if (selectedTimeFrame === "Daily") {
    labels = ["D1", "D2", "D3", "D4", "D5", "D6", "D7"];
  }

  // Use the passed monthlyData for the chart data
  const datasets = [
    {
      data: monthlyData,
    },
  ];

  const chartData = {
    labels,
    datasets,
    
  };

  const screenWidth = Dimensions.get("window").width;
  const screenheight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        width={screenWidth * 0.80}
        height= {screenheight * 0.20 }
        chartConfig={chartConfig}
        withInnerLines={false}
        bezier
        
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    
    //height : '100%',
   //width: "100%",
    //marginHorizontal: "1%",
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //borderRadius : 30,
    //backgroundColor : '#000'
    //padding: 16,
    //borderWidth: 1,
    //borderRadius: 10,
    
  },
});

export default GraphWater;
