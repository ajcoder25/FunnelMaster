# FunnelMaster Dashboard - Product Requirements Document

## 📋 Executive Summary




## 🎯 Product Overview

### Core Value Proposition
- **Complete Funnel Visibility**: Track every step from YouTube views → website visits → calls → sales
- **Video Attribution**: Identify which YouTube videos generate the most revenue
- **AI-Powered Insights**: Get automated recommendations for funnel optimization
- **Geographic Intelligence**: Understand where your best leads originate

### Target Users
- High-ticket coaches and consultants
- Marketing managers in coaching businesses
- Business owners running YouTube-based funnels

## 🏗️ Technical Architecture

### Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animation**: Framer Motion
- **3D Graphics**: React Three Fiber, Drei
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Clerk
- **AI**: OpenAI API
- **External APIs**: YouTube Data API v3
- **Data Visualization**: Recharts, Custom D3 components

### Database Schema

#### 1. youtube_videos
```sql
CREATE TABLE youtube_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL,
  monthly_views INTEGER DEFAULT 0,
  unique_views INTEGER DEFAULT 0,
  month DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 2. leads
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  country TEXT,
  source_video_id TEXT REFERENCES youtube_videos(video_id),
  website_visited_at TIMESTAMP WITH TIME ZONE,
  call_booked_at TIMESTAMP WITH TIME ZONE,
  call_accepted BOOLEAN DEFAULT FALSE,
  month DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 3. calls
```sql
CREATE TABLE calls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booked_at TIMESTAMP WITH TIME ZONE NOT NULL,
  accepted BOOLEAN DEFAULT FALSE,
  video_id TEXT REFERENCES youtube_videos(video_id),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  month DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 4. sales
```sql
CREATE TABLE sales (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,
  payment_type TEXT CHECK (payment_type IN ('full_pay', 'installment')),
  amount NUMERIC(10,2) NOT NULL,
  first_payment BOOLEAN DEFAULT TRUE,
  month DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 5. summary_metrics
```sql
CREATE TABLE summary_metrics (
  month DATE PRIMARY KEY,
  youtube_total_views INTEGER DEFAULT 0,
  youtube_unique_views INTEGER DEFAULT 0,
  website_visitors INTEGER DEFAULT 0,
  total_calls_booked INTEGER DEFAULT 0,
  accepted_calls INTEGER DEFAULT 0,
  new_cash_collected NUMERIC(10,2) DEFAULT 0,
  cash_from_pif NUMERIC(10,2) DEFAULT 0,
  cash_from_installments NUMERIC(10,2) DEFAULT 0,
  total_cash_collected NUMERIC(10,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🎨 Feature Requirements

### Landing Page: Marketing & Conversion
**Description**: High-converting landing page to showcase FunnelMaster's value proposition

**Components Required**:
- Hero section with compelling headline and demo preview
- Feature showcase with icons and benefits
- Social proof section with testimonials/logos
- CTA section with "Start Now" button
- Pricing overview (optional)
- FAQ section
- Footer with links and contact info

**CTA Component Integration**:
```tsx
// Landing page CTA implementation
<CTASection
  badge={{
    text: "Transform Your Funnel"
  }}
  title="Start Tracking Your Sales Funnel Today"
  description="Join hundreds of coaches who've increased their revenue by 40% with FunnelMaster's AI-powered insights"
  action={{
    text: "Start Now",
    href: "/sign-up",
    variant: "glow"
  }}
  withGlow={true}
/>
```

**Required shadcn/ui Components**:
- Button component (provided)
- Badge component (provided) 
- Card component for feature highlights
- Testimonial cards
- Navigation menu

**Tailwind Extensions**:
- Custom brand colors (--brand, --brand-foreground)
- Glow effects and animations
- Container max-width utilities
- Custom keyframes for smooth interactions

**Assets Needed**:
- Hero dashboard mockup/screenshot
- Feature icons (using Lucide React)
- Testimonial avatars (Unsplash stock photos)
- Company logos for social proof

### Feature 1: 🔄 Funnel Overview Dashboard
**Description**: Monthly funnel performance with conversion rates at each stage

**Components**:
- Funnel visualization (3D using React Three Fiber)
- Monthly metrics cards
- Conversion rate indicators
- Revenue breakdown charts

**Data Requirements**:
- YouTube views (total + per video)
- Website visitors
- Calls booked/accepted
- Show-up rates
- Revenue by payment type and product

### Feature 2: 🎥 Video Attribution Analytics
**Description**: Track which YouTube videos drive the most revenue

**Components**:
- Video performance table
- Attribution flow diagram
- ROI per video calculations
- Value per view metrics

**Calculations**:
- Conversion rate: (Calls Booked / Video Views) × 100
- Revenue per view: Total Revenue / Total Views
- ROI per video: Revenue Generated / Estimated Production Cost

### Feature 3: ⚡ Trends & Comparisons
**Description**: Month-over-month growth analysis and trend identification

**Components**:
- Growth trend charts (Line charts using Recharts)
- MoM percentage changes
- Performance comparison tables
- Drop-off point identification

**Metrics**:
- Lead growth rate
- Revenue growth rate
- Conversion rate improvements
- Funnel optimization opportunities

### Feature 4: 🤖 AI Assistant
**Description**: OpenAI-powered insights and recommendations

**Components**:
- Monthly summary generator
- Performance analysis
- Actionable recommendations
- Trend prediction

**AI Prompts Structure**:
```typescript
const generateSummary = (data: FunnelData) => `
Analyze this sales funnel data and provide:
1. Key performance highlights
2. Areas of concern or drop-offs
3. Top-performing content
4. 3 specific actionable recommendations
Data: ${JSON.stringify(data)}
`;
```

### Feature 5: 🌍 Geographic Analytics
**Description**: Lead source analysis by country/region

**Components**:
- Interactive world map
- Country performance table
- Geographic conversion rates
- Market opportunity identification

## 🛠️ Implementation Roadmap

### Phase 1: Foundation Setup
**Step 1: Project Initialization & Environment Setup**
- Initialize Next.js 14 project with TypeScript
- Install and configure all dependencies
- Set up Tailwind CSS and shadcn/ui
- Configure environment variables
- Set up Git repository and initial commit

**Step 1.5: Landing Page Creation**
- Create marketing landing page with CTA component integration
- Implement hero section showcasing FunnelMaster dashboard benefits
- Add feature highlights and testimonials sections
- Integrate CTA component with "Start Now" button linking to sign-up
- Set up responsive design for mobile and desktop
- Add proper SEO metadata and Open Graph tags

**Step 2: Authentication & Database Setup**
- Implement Clerk authentication
- Configure Supabase project and database
- Create all database tables with proper relationships
- Set up Row Level Security (RLS) policies
- Create database seed script with mock data

### Phase 2: Core Infrastructure
**Step 3: API Layer & Data Management**
- Create Supabase client configuration
- Implement CRUD operations for all tables
- Set up YouTube API integration
- Create data fetching hooks using React Query/SWR
- Implement error handling and loading states

**Step 4: UI Foundation & Layout**
- Create main dashboard layout with navigation
- Implement responsive design system
- Set up routing structure
- Create reusable UI components
- Implement theme system (light/dark mode)

### Phase 3: Dashboard Features
**Step 5: Funnel Overview Dashboard**
- Create funnel visualization using React Three Fiber
- Implement metrics cards with real-time data
- Build conversion rate calculators
- Create revenue breakdown charts
- Add month selector and filtering

**Step 6: Video Attribution System**
- Build video performance table with sorting/filtering
- Implement attribution tracking logic
- Create video detail modal with deep analytics
- Build ROI calculation engine
- Add video thumbnail integration

### Phase 4: Analytics & Intelligence
**Step 7: Trends & Comparison Analytics**
- Implement trend analysis calculations
- Create interactive charts using Recharts
- Build comparison tools (month-over-month)
- Add performance benchmarking
- Implement data export functionality

**Step 8: AI Assistant Integration**
- Set up OpenAI API integration
- Create prompt engineering system
- Implement summary generation
- Build recommendation engine
- Add chat-like interface for AI insights

### Phase 5: Final Features & Polish
**Step 9: Geographic Analytics & Additional Features**
- Integrate world map visualization
- Implement country-based analytics
- Add advanced filtering and search
- Create custom date range selection
- Implement data refresh mechanisms

**Step 10: Testing, Optimization & Deployment**
- Comprehensive testing (unit, integration, e2e)
- Performance optimization
- Security audit and fixes
- Deployment setup (Vercel/Railway)
- Documentation and user guides

## 📁 Final File Structure

```
funnelmaster/
├── .env.local
├── .env.example
├── .gitignore
├── README.md
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── package-lock.json
├── postcss.config.js
├── components.json
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── placeholder-video.jpg
│   │   └── world-map.svg
│   └── icons/
│       ├── youtube.svg
│       ├── calendar.svg
│       └── revenue.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx (Landing Page)
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── funnel/
│   │   │   │   └── page.tsx
│   │   │   ├── videos/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [videoId]/
│   │   │   │       └── page.tsx
│   │   │   ├── trends/
│   │   │   │   └── page.tsx
│   │   │   ├── ai-insights/
│   │   │   │   └── page.tsx
│   │   │   └── geography/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── webhook/
│   │   │   │       └── route.ts
│   │   │   ├── dashboard/
│   │   │   │   ├── funnel/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── videos/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── trends/
│   │   │   │   │   └── route.ts
│   │   │   │   └── geography/
│   │   │   │       └── route.ts
│   │   │   ├── ai/
│   │   │   │   ├── summary/
│   │   │   │   │   └── route.ts
│   │   │   │   └── recommendations/
│   │   │   │       └── route.ts
│   │   │   └── youtube/
│   │   │       ├── videos/
│   │   │       │   └── route.ts
│   │   │       └── analytics/
│   │   │           └── route.ts
│   │   └── (auth)/
│   │       ├── sign-in/
│   │       │   └── page.tsx
│   │       └── sign-up/
│   │           └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── tooltip.tsx
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureShowcase.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── dashboard/
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── funnel/
│   │   │   ├── FunnelOverview.tsx
│   │   │   ├── FunnelVisualization.tsx
│   │   │   ├── MetricsCards.tsx
│   │   │   ├── ConversionRates.tsx
│   │   │   └── RevenueBreakdown.tsx
│   │   ├── videos/
│   │   │   ├── VideoAttributionTable.tsx
│   │   │   ├── VideoPerformanceCard.tsx
│   │   │   ├── VideoDetailModal.tsx
│   │   │   └── VideoThumbnail.tsx
│   │   ├── trends/
│   │   │   ├── TrendCharts.tsx
│   │   │   ├── GrowthMetrics.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   └── PerformanceBenchmarks.tsx
│   │   ├── ai/
│   │   │   ├── AIAssistant.tsx
│   │   │   ├── SummaryCard.tsx
│   │   │   ├── RecommendationsList.tsx
│   │   │   └── InsightsChat.tsx
│   │   ├── geography/
│   │   │   ├── WorldMap.tsx
│   │   │   ├── CountryTable.tsx
│   │   │   └── GeographicMetrics.tsx
│   │   ├── charts/
│   │   │   ├── LineChart.tsx
│   │   │   ├── BarChart.tsx
│   │   │   ├── PieChart.tsx
│   │   │   └── FunnelChart.tsx
│   │   └── common/
│   │       ├── LoadingSpinner.tsx
│   │       ├── ErrorBoundary.tsx
│   │       ├── DateRangePicker.tsx
│   │       ├── SearchInput.tsx
│   │       └── DataExport.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── queries.ts
│   │   │   └── types.ts
│   │   ├── youtube/
│   │   │   ├── api.ts
│   │   │   └── types.ts
│   │   ├── ai/
│   │   │   ├── openai.ts
│   │   │   ├── prompts.ts
│   │   │   └── types.ts
│   │   ├── auth/
│   │   │   └── clerk.ts
│   │   └── analytics/
│   │       ├── calculations.ts
│   │       ├── conversions.ts
│   │       └── utils.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useDashboardData.ts
│   │   ├── useFunnelMetrics.ts
│   │   ├── useVideoAnalytics.ts
│   │   ├── useTrendAnalysis.ts
│   │   ├── useAIInsights.ts
│   │   ├── useGeographicData.ts
│   │   └── useYouTubeData.ts
│   ├── types/
│   │   ├── database.ts
│   │   ├── dashboard.ts
│   │   ├── youtube.ts
│   │   ├── ai.ts
│   │   └── analytics.ts
│   ├── stores/
│   │   ├── dashboardStore.ts
│   │   ├── filtersStore.ts
│   │   └── uiStore.ts
│   └── data/
│       ├── mockData.ts
│       ├── seedDatabase.sql
│       └── sampleQueries.sql
├── tests/
│   ├── __mocks__/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── pages/
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── DEVELOPMENT.md
│   └── USER_GUIDE.md
└── scripts/
    ├── seed-database.js
    ├── migrate.js
    └── build.js
```

## 🔧 Technical Implementation Details

### Environment Variables
```bash
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# AI
OPENAI_API_KEY=

# YouTube
YOUTUBE_API_KEY=

# App
NEXT_PUBLIC_APP_URL=
```

### Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "typescript": "^5.0.0",
    "@clerk/nextjs": "^4.29.0",
    "@supabase/supabase-js": "^2.38.0",
    "openai": "^4.20.0",
    "tailwindcss": "^3.4.0",
    "@radix-ui/react-*": "latest",
    "framer-motion": "^10.16.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "recharts": "^2.8.0",
    "date-fns": "^2.30.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.48.0",
    "lucide-react": "^0.294.0"
  }
}
```

### Performance Considerations
- Implement React.memo for expensive components
- Use Suspense and lazy loading for route splitting
- Implement caching strategy for API calls
- Optimize database queries with proper indexing
- Use CDN for static assets

### Security Requirements
- Implement proper RLS policies in Supabase
- Validate all API inputs with Zod schemas
- Use CSRF protection
- Implement rate limiting for AI API calls
- Secure environment variable management

## 📊 Success Metrics
- Dashboard load time < 2 seconds
- 99.9% uptime
- User engagement (time spent on dashboard)
- Feature adoption rates
- Customer satisfaction scores

## 🚀 Post-Launch Considerations
- User feedback collection system
- A/B testing framework
- Advanced analytics integration
- Mobile app development
- Enterprise features (team management, white-labeling)

---

**Document Version**: 1.0  
**Last Updated**: June 16, 2025  
**Next Review**: July 1, 2025