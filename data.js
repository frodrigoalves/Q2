export const architectureData = {
    strategy: {
        en: "SingulAI solves the greatest challenges in the AI landscape: transparency and data sovereignty. By decoupling the compute layer from the application layer, we provide a resilient, future-proof infrastructure that scales with the global demand for decentralized intelligence.",
        pt: "A SingulAI resolve os maiores desafios do cenário de IA: transparência e soberania de dados. Ao desacoplar a camada de processamento da camada de aplicação, fornecemos uma infraestrutura resiliente e preparada para o futuro que escala com a demanda global por inteligência descentralizada."
    },
    backend: {
        pt: {
            intro: "Malha de microsserviços distribuídos focada em latência ultra-baixa para inferência de IA e alta taxa de transferência em interações blockchain.",
            drawers: [
                {
                    title: "Inference Engine & Orchestration",
                    content: "Núcleo de processamento neural utilizando NVIDIA Triton Inference Server e Kubernetes para escalonamento automático baseado em demanda de GPU.",
                    tech: "Python, FastAPI, PyTorch, K8s, NVIDIA Triton"
                },
                {
                    title: "SGL Token Interoperability",
                    content: "Estratégia Layer 2 (Polygon/Arbitrum) para garantir custos de transação sub-centavos. Contratos auditados para queima/emissão de créditos de IA.",
                    tech: "Solidity, Hardhat, Ethers.js, Arbitrum"
                },
                {
                    title: "Security & Compliance Mesh",
                    content: "Criptografia AES-256 em repouso e TLS 1.3 em trânsito. Conformidade total com GDPR/LGPD via Zero-Knowledge Proofs.",
                    tech: "Rust, ZKP, OAuth2, Terraform"
                }
            ]
        },
        en: {
            intro: "Distributed microservices mesh engineered for sub-200ms AI inference response times and high-throughput blockchain settlement layers.",
            drawers: [
                {
                    title: "Inference Engine & Orchestration",
                    content: "Neural processing core utilizing NVIDIA Triton Inference Server and Kubernetes for auto-scaling based on real-time GPU/CPU utilization.",
                    tech: "Python, FastAPI, PyTorch, K8s, NVIDIA Triton"
                },
                {
                    title: "SGL Token Interoperability",
                    content: "Layer 2 deployment (Polygon/Arbitrum) ensuring sub-cent transaction costs. Audited contracts for AI credit burn/mint cycles.",
                    tech: "Solidity, Hardhat, Ethers.js, Arbitrum"
                },
                {
                    title: "Security & Compliance Mesh",
                    content: "AES-256 encryption at rest and TLS 1.3 in transit. Full GDPR/LGPD compliance integrated via Zero-Knowledge Proofs.",
                    tech: "Rust, ZKP, OAuth2, Terraform"
                }
            ]
        }
    },
    frontend: {
        pt: {
            intro: "Interface focada em 'Inteligência Humano-Cêntrica', transicionando suavemente entre visualização de dados complexos e interação intuitiva.",
            drawers: [
                {
                    title: "Atomic Design & Next.js 14",
                    content: "Arquitetura modular que garante consistência total da interface e renderização do lado do servidor (SSR) para carregamento instantâneo.",
                    tech: "Next.js 14, React 18, Atomic Design"
                },
                {
                    title: "State & Motion Engine",
                    content: "Gerenciamento de estado global ultra-leve com Zustand e transições fluidas a 60fps alimentadas pelo Framer Motion.",
                    tech: "Zustand, Framer Motion, Tailwind CSS"
                },
                {
                    title: "Web3 Integration (Wagmi)",
                    content: "Login híbrido (Email + Web3) proporcionando uma experiência 'Web2.5' sem fricção para o usuário institucional.",
                    tech: "Wagmi, Viem, WalletConnect, Auth0"
                }
            ]
        },
        en: {
            intro: "Designed for 'Human-Centric Intelligence,' focusing on a seamless transition between complex data visualization and intuitive AI interaction.",
            drawers: [
                {
                    title: "Atomic Design & Next.js 14",
                    content: "Modular hierarchy ensuring 100% component reusability and Server-Side Rendering (SSR) for instantaneous loading states.",
                    tech: "Next.js 14, React 18, Atomic Design"
                },
                {
                    title: "State & Motion Engine",
                    content: "Ultra-lightweight global state management via Zustand and fluid 60fps transitions powered by Framer Motion.",
                    tech: "Zustand, Framer Motion, Tailwind CSS"
                },
                {
                    title: "Web3 Integration (Wagmi)",
                    content: "Hybrid login system (Email + Web3 Wallet) providing a frictionless 'Web2.5' experience for institutional users.",
                    tech: "Wagmi, Viem, WalletConnect, Auth0"
                }
            ]
        }
    },
    modules: [
        {
            id: "M01",
            progress: 45,
            status: { pt: "Beta Interno", en: "Internal Beta" },
            complexity: { pt: "Crítica", en: "Critical" },
            name: { pt: "Core AI Engine", en: "Core AI Engine" },
            tech: "Python, PyTorch, CUDA",
            notes: { pt: "Hub neural para inferência de LLM e ajuste fino de modelos customizados.", en: "Neural network hub for LLM inference and custom model fine-tuning." },
            image: "https://r2-bucket.flowith.net/f/433f4155567121ff/uare_ai_core_3d_isometric_icon_index_2%401376x768.jpeg"
        },
        {
            id: "M02",
            progress: 30,
            status: { pt: "Auditando", en: "Auditing" },
            complexity: { pt: "Crítica", en: "Critical" },
            name: { pt: "SGL Token Bridge", en: "SGL Token Bridge" },
            tech: "Solidity, Hardhat",
            notes: { pt: "Contratos inteligentes gerenciando utilidade SGL, staking e conversão de créditos.", en: "Smart contracts managing SGL utility, staking, and credit conversion." },
            image: "https://r2-bucket.flowith.net/f/f3a013ca009fb56f/sgl_tokenomics_engine_icon_index_0%401376x768.jpeg"
        },
        {
            id: "M03",
            progress: 60,
            status: { pt: "Em Dev", en: "In Dev" },
            complexity: { pt: "Média", en: "Medium" },
            name: { pt: "Neural Dashboard", en: "Neural Dashboard" },
            tech: "React, Next.js, Recharts",
            notes: { pt: "UX unificado para monitoramento de tarefas de IA, saldo de tokens e histórico.", en: "Unified UX for monitoring AI tasks, token balance, and usage history." },
            image: "https://r2-bucket.flowith.net/f/9ef6d573e009d104/realtime_analytics_3d_icon_index_3%404096x2286.jpeg"
        },
        {
            id: "M04",
            progress: 80,
            status: { pt: "Estável", en: "Stable" },
            complexity: { pt: "Média", en: "Medium" },
            name: { pt: "Identity Portal", en: "Identity Portal" },
            tech: "Auth0, Wagmi, Viem",
            notes: { pt: "Sistema de login híbrido com integração de Identidade Descentralizada (DID).", en: "Hybrid login system (Email + Web3 Wallet) with DID integration." },
            image: "https://r2-bucket.flowith.net/f/03c877f8cebdb3cf/compliance_kyc_3d_icon_index_3%401376x768.jpeg"
        },
        {
            id: "M05",
            progress: 15,
            status: { pt: "Alfa", en: "Alpha" },
            complexity: { pt: "Média", en: "Medium" },
            name: { pt: "AI Marketplace", en: "AI Marketplace" },
            tech: "Node.js, PostgreSQL",
            notes: { pt: "Loja para prompts de IA e modelos ajustados pela comunidade.", en: "Storefront for community-developed AI prompts and fine-tuned models." },
            image: "https://r2-bucket.flowith.net/f/daf157b1bf3908ed/ai_engine_isometric_icon_index_3.jpeg"
        },
        {
            id: "M06",
            progress: 20,
            status: { pt: "Em Dev", en: "In Dev" },
            complexity: { pt: "Alta", en: "High" },
            name: { pt: "Analytics Real-time", en: "Real-time Analytics" },
            tech: "Go, Prometheus, Grafana",
            notes: { pt: "Telemetria ao vivo de custos de processamento e métricas de performance.", en: "Live telemetry of compute costs and AI performance metrics." },
            image: "https://r2-bucket.flowith.net/f/d39dbdedfa44ef7d/blockchain_nodes_3d_isometric_icon_index_2%402048x2048.jpeg"
        },
        {
            id: "M07",
            progress: 10,
            status: { pt: "Planejado", en: "Planned" },
            complexity: { pt: "Média", en: "Medium" },
            name: { pt: "Governance DAO", en: "Governance DAO" },
            tech: "Snapshot, Solidity",
            notes: { pt: "Módulo de votação on-chain para influenciar atualizações do protocolo.", en: "On-chain voting module for SGL holders to influence protocol updates." },
            image: "https://r2-bucket.flowith.net/f/7539b1229db6e400/governance_dao_isometric_icon_index_4%404096x2286.jpeg"
        },
        {
            id: "M08",
            progress: 25,
            status: { pt: "Alfa", en: "Alpha" },
            complexity: { pt: "Média", en: "Medium" },
            name: { pt: "SDK / API Hub", en: "SDK / API Hub" },
            tech: "Swagger, Express.js",
            notes: { pt: "Portal do desenvolvedor para integração da SingulAI em dApps externos.", en: "Developer portal for integrating SingulAI into external dApps." },
            image: "https://r2-bucket.flowith.net/f/f9413ad7ffaf8d30/institutional_bridge_gateway_icon_index_1%401376x768.jpeg"
        },
        {
            id: "M09",
            progress: 5,
            status: { pt: "Planejado", en: "Planned" },
            complexity: { pt: "Média", en: "Medium" },
            name: { pt: "Mobile Companion", en: "Mobile Companion" },
            tech: "React Native, Expo",
            notes: { pt: "Versão lite para monitoramento mobile de tarefas de IA.", en: "Lite version of the dashboard for iOS/Android task monitoring." },
            image: "https://r2-bucket.flowith.net/f/dd61637759f6f476/ux_design_system_3d_icon_index_2%404096x2286.jpeg"
        },
        {
            id: "M10",
            progress: 10,
            status: { pt: "P&D", en: "R&D" },
            complexity: { pt: "Alta", en: "High" },
            name: { pt: "Security Sentinel", en: "Security Sentinel" },
            tech: "Python, Scikit-learn",
            notes: { pt: "Detecção de ameaças via IA e auditoria automatizada de smart contracts.", en: "AI-driven threat detection and automated smart contract auditing." },
            image: "https://r2-bucket.flowith.net/f/0aaa5ad94d780b4d/data_privacy_vault_3d_icon_index_4%401376x768.jpeg"
        }
    ]
};
