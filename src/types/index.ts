export interface View {
  graph_data: {
    views: Record<string, number>;
  };
  top_locations: {
    country: string;
    count: number;
    percent: number;
  }[];
  top_sources: {
    source: string;
    count: number;
    percent: number;
  }[];
}
