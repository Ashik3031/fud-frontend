import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public
app.use(express.static(path.resolve(__dirname, 'public')));

// 1. API Routes
// Inquiries & Quotation Leads
app.post('/api/inquiry', (req: Request, res: Response) => {
  const {
    companyName,
    contactName,
    phone,
    email,
    emirate,
    selectedCategories,
    estimatedVolume,
    businessType,
    notes,
    locale,
  } = req.body;

  // Basic server-side validation
  if (!contactName || !phone || !email) {
    return res.status(400).json({ error: 'Missing required contact fields' });
  }

  const quoteId = `FUD-${Date.now().toString().slice(-6)}`;
  console.log(`[FUDIYO B2B Trade Desk] Received Wholesale Enquiry ${quoteId} from ${companyName || contactName} (${emirate})`);

  // In production, notify sales team via email / CRM webhook
  return res.status(200).json({
    success: true,
    quoteId,
    message: 'Wholesale inquiry successfully received. Sales team notified.',
  });
});

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', brand: 'FUDIYO', exporter: 'Eranad Exports Pvt Ltd', time: new Date().toISOString() });
});

// Dynamic Route Metadata Map for server-side HTML injection
const ROUTE_META: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'FUDIYO Frozen Food UAE | Kerala Parotta, Snacks & Fruit Pulp Supplier',
    desc: 'FUDIYO™ by Eranad Exports: Authentic Kerala Malabar parotta, snacks, fresh-cut vegetables, instant gravy mixes, halal chicken & 100% natural fruit pulp in UAE.',
  },
  '/ar': {
    title: 'فوديو للأغذية المجمدة الإمارات | مورد باراتا كيرالا ولب الفواكه',
    desc: 'أغذية فوديو™ من إراناد إكسبورتس: باراتا مالابار الكيرالية، وجبات خفيفة، خضار مقطعة، خلطات كاري، دجاج حلال ولب فواكه طبيعي 100% بالإمارات.',
  },
  '/about': {
    title: 'About FUDIYO™ & Eranad Exports | Kerala Heritage Frozen Foods',
    desc: 'Learn about FUDIYO Foods & Eranad Exports Pvt Ltd (CIN: U47590KL2024PTC090591). Bringing authentic Kerala flavours, hygienic IQF processing & export excellence to UAE.',
  },
  '/products': {
    title: 'Frozen Food Products Hub UAE | Parotta, Curries & Fruit Pulp',
    desc: 'Explore over 45 authentic FUDIYO frozen products: flaky Malabar parotta, steamed puttu & idli, tea-time snacks, fresh vegetables, gravies, and 100% natural fruit pulps.',
  },
  '/frozen-food-supplier-uae': {
    title: 'Frozen Food Supplier UAE | B2B Wholesale Dubai & Abu Dhabi',
    desc: 'Premier frozen food supplier in the UAE. Reliable -18°C cold-chain supply for supermarkets, hotels, cloud kitchens, and caterers across Dubai, Abu Dhabi, and Sharjah.',
  },
  '/frozen-kerala-parotta-dubai': {
    title: 'Frozen Kerala Parotta Dubai | Wholesale Malabar Flatbread UAE',
    desc: 'Source authentic frozen Kerala Malabar parotta in Dubai. Multi-layered, flaky, heat-and-eat in 2 minutes. Bulk supply for supermarkets, cafeterias, and restaurants.',
  },
  '/halal-frozen-chicken-uae': {
    title: 'Halal Frozen Chicken Supplier Dubai & UAE | A-Grade Poultry',
    desc: 'Certified 100% Halal whole griller chicken, chicken legs, skinless breast fillets, and samosa pastry sheets. Reliable UAE wholesale supply.',
  },
  '/fruit-pulp-supplier-uae': {
    title: 'Frozen Fruit Pulp Supplier UAE | 100% Natural Alphonso & Guava',
    desc: 'Wholesale 100% natural frozen fruit pulp in Dubai: Alphonso Mango, Tender Coconut, White & Pink Guava, Custard Apple, Chickoo. Zero added sugar or preservatives.',
  },
  '/wholesale-distributor-enquiry': {
    title: 'Wholesale & Distributor Enquiry UAE | Request Quote FUDIYO',
    desc: 'Partner with FUDIYO & Eranad Exports. Request wholesale pricing, pallet specifications, and distributor terms for supermarkets, caterers, and food businesses.',
  },
};

// 2. Vite Integration or Production Static Serving
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    // Mount Vite middlewares
    app.use(vite.middlewares);

    // Fallback HTML with server-side meta tags
    app.use('*', async (req: Request, res: Response, next) => {
      const url = req.originalUrl.split('?')[0];

      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        // Inject route specific title & description if available
        const meta = ROUTE_META[url] || ROUTE_META['/'];
        if (meta) {
          template = template.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
          template = template.replace(
            /<meta name="description" content=".*?" \/>/,
            `<meta name="description" content="${meta.desc}" />`
          );
        }

        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production: serve built static files from dist
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FUDIYO™ Full-Stack Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
