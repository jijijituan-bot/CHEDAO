import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

import {
    Car,
    Truck,
    CarFront,
    RefreshCw,
    ShieldCheck,
    Road,
    CheckCircle,
    MapPin,
    Phone,
    Mail,
    Clock,
    ChevronRight,
    Menu,
    X,
    Sun,
    Moon,
    ArrowRight,
    Users,
    Activity,
    ClipboardCheck,
    Star,
} from "lucide-react";

const services = [{
    id: 1,
    title: "车辆过户/跨省通办",
    description: "全国各地区办证标准及线下运营体系的完善及及时更新，效率优先、安全便捷、全国性覆盖专业性团队支持的服务体系",
    icon: <RefreshCw className="h-10 w-10 text-orange-500" />
}, {
    id: 2,
    title: "车辆备案解押抵押",
    description: "全国范围的车辆备案、解押、抵押以及相应的背户和资产保全业务，协助客户方完第三方监管",
    icon: <ShieldCheck className="h-10 w-10 text-orange-500" />
}, {
    id: 3,
    title: "物流代驾",
    description: "全国范围物流代驾服务，实现门到门的运输",
    icon: <Truck className="h-10 w-10 text-orange-500" />
}, {
    id: 4,
    title: "车辆上牌",
    description: "全国范围的车辆上牌已落地全国200+个地级市，一站式标准流程服务体系解决异地临牌办理过渡正式上牌",
    icon: <CarFront className="h-10 w-10 text-orange-500" />
}, {
    id: 5,
    title: "车辆年检",
    description: "覆盖全国29个省市自治区提供上门取还车服务，为送检车辆提供代驾责任险，保障做到足不出户，无忧办年检",
    icon: <CheckCircle className="h-10 w-10 text-orange-500" />
}, {
    id: 6,
    title: "客户邀约",
    description: "专业呼叫团队，为客户提供专属的客服体验",
    icon: <Phone className="h-10 w-10 text-orange-500" />
}];

const processSteps = [{
    id: 1,
    title: "订单启动与前期准备",

    steps: [
        "客户下单：融资租赁客户在平台发起业务订单",
        "订单确认：车前中后台运营接收并确认订单信息",
        "车辆查询：线下网点/供应商完成目标车辆的状态查询",
        "邀约原车主：确认解押/过户时间",
        "解除抵押：协助原车主完成车辆解除抵押手续",
        "车辆交接：完成车辆出库与交接"
    ]
}, {
    id: 2,
    title: "首次过户与车辆监管",

    steps: [
        "材料寄送：客户寄送车辆过户所需材料证件",
        "首次过户（背户）：线下网点完成操作",
        "监管停放：过户后车辆进入指定监管区域停放",
        "状况反馈：反馈车辆停放状态与车况"
    ]
}, {
    id: 3,
    title: "二次过户与交付",

    steps: [
        "邀约新车主：确认二次过户时间",
        "二次过户：完成车辆二次过户手续",
        "凭证提交：提交过户完成凭证",
        "过户确认：确认过户完结并同步信息",
        "车辆交接：向新车主交接车辆及全套材料",
        "客户提车：新车主完成提车"
    ]
}, {
    id: 4,
    title: "费用结算",
    steps: ["账单提交：整理业务全流程费用，提交账单", "费用结算：客户完成费用支付，业务闭环"]
}];

const networkData = [{
    name: "年检服务",
    value: 29,
    unit: "个省市自治区"
}, {
    name: "合作检测站",
    value: 1000,
    unit: "+"
}, {
    name: "覆盖地级市",
    value: 200,
    unit: "+"
}, {
    name: "覆盖县级市",
    value: 400,
    unit: "+"
}, {
    name: "现场服务团队",
    value: 2000,
    unit: "+"
}, {
    name: "合作服务站",
    value: 500,
    unit: "+"
}, {
    name: "合作服务商",
    value: 1000,
    unit: "+"
}];

const cases = [{
    id: 1,
    title: "企业车队批量年检",
    description: "为某大型物流公司的500台运输车辆提供一站式年检服务，节省企业80%的时间成本",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Commercial%20truck%20fleet%2C%20many%20trucks%20lined%20up%2C%20professional%20inspection%2C%20high%20quality%20image&sign=4f60e7ab22f68b853d9cf78d0cb9d19f"
}, {
    id: 2,
    title: "跨省车辆过户服务",
    description: "协助某汽车经销商完成100台车辆从广东到全国各省市的异地过户，全程无忧",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Car%20dealer%20showroom%2C%20many%20cars%2C%20professional%20service%2C%20happy%20customers&sign=579048a1706008a4a36354607eec8a54"
}, {
    id: 3,
    title: "金融机构资产处置",
    description: "为某银行处理200台抵押车辆的解押、过户及监管服务，确保资产安全高效处置",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Financial%20institution%2C%20car%20loan%20services%2C%20professional%20team%2C%20document%20processing&sign=380d462d34747ab05c8ad391c83d4e6e"
}];

export default function Home() {
    const {
        theme,
        toggleTheme
    } = useTheme();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeProcess, setActiveProcess] = useState(1);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "min-h-screen flex flex-col",
                theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            )}>
            {}
            <header
                className={cn(
                    "sticky top-0 z-50 transition-all duration-300",
                    scrolled ? theme === "dark" ? "bg-gray-800/95 backdrop-blur-md shadow-lg" : "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
                )}>
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/328981205506/attachment/logo_20260319133810.png"
                            alt="车到山前"
                            className="h-14 w-auto" />
                    </div>
                    {}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#about"
                            className="font-medium hover:text-orange-500 transition-colors">关于我们</a>
                        <a
                            href="#services"
                            className="font-medium hover:text-orange-500 transition-colors">车务服务</a>
                        <a
                            href="#process"
                            className="font-medium hover:text-orange-500 transition-colors">金融业务</a>
                        <a
                            href="#cases"
                            className="font-medium hover:text-orange-500 transition-colors">成功案例</a>
                        <></>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label={theme === "dark" ? "切换到亮色模式" : "切换到暗色模式"}>
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <></>
                        {}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="打开菜单">
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {}
                {mobileMenuOpen && <motion.div
                    initial={{
                        opacity: 0,
                        height: 0
                    }}
                    animate={{
                        opacity: 1,
                        height: "auto"
                    }}
                    exit={{
                        opacity: 0,
                        height: 0
                    }}
                    className={cn("md:hidden py-4 px-4", theme === "dark" ? "bg-gray-800" : "bg-white")}>
                    <nav className="flex flex-col space-y-4">
                        <a
                            href="#about"
                            className="font-medium py-2 hover:text-orange-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}>关于我们
                                                                                                                                                                                                                                                                          </a>
                        <a
                            href="#services"
                            className="font-medium py-2 hover:text-orange-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}>服务项目
                                                                                                                                                                                                                                                                          </a>
                        <a
                            href="#process"
                            className="font-medium py-2 hover:text-orange-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}>服务流程
                                                                                                                                                                                                                                                                           </a>
                        <a
                            href="#cases"
                            className="font-medium py-2 hover:text-orange-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}>成功案例</a>
                        <a
                            href="#contact"
                            className="font-medium py-2 hover:text-orange-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}>联系我们
                                                                                                                                                                                                                                                                          </a>
                        <button
                            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg w-full">立即咨询
                                                                                                                                                                                                                                                                          </button>
                    </nav>
                </motion.div>}
            </header>
            <main className="flex-grow">
                {}
                <section className="relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10 z-0"></div>
                    <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 30
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 0.8
                                    }}>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        <span
                                            className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">智能车辆服务平台</span>
                                        <br />让车务办理更简单
                                                                                                                                                                                                                                                                                                                                                                                          </h1>
                                    <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">全国性车务供应链一体化对接服务，涵盖车辆上牌、过户、年检等多项服务，为您提供专业、高效、便捷的车务解决方案。
                                                                                                                                                                                                                                                                                                                                                                                          </p>
                                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                        <button
                                            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">立即预约服务
                                                                                                                                                                                                                                                                                                                                                                                                                                  <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button
                                            className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 font-medium rounded-full transition-colors duration-300">了解更多
                                                                                                                                                                                                                                                                                                                                                                                                                                </button>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="md:w-1/2">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2
                                    }}
                                    className="relative">
                                    <div
                                        className="absolute inset-0 bg-orange-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                                    <img
                                        src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20car%20service%20platform%2C%20professional%20team%2C%20efficient%20service%2C%20digital%20interface&sign=7b315d20120d7bf5ea9760108db84fca"
                                        alt="智能车辆服务平台"
                                        className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transform transition-transform hover:scale-[1.02]" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {}
                    <div
                        className={cn(
                            "absolute bottom-0 left-0 right-0",
                            theme === "dark" ? "text-gray-900" : "text-white"
                        )}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                            <path
                                fill="currentColor"
                                fillOpacity="1"
                                d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                        </svg>
                    </div>
                </section>
                {}
                <section
                    id="about"
                    className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-orange-50"}`}>
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">关于车到山前</h2>
                            <div
                                className={cn(
                                    "space-y-4 text-gray-600 dark:text-gray-300",
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                )}>
                                <p>广州车到山前科技有限公司(简称车到山前)，成立于2020年7月，公司总部设立在广州，作为车务领域专业服务方的企业，根据行业发展和客户需求，设计完善围绕车辆交易处置场景的全国性车务供应链一体化对接产品。
                                                                                                                                                                                                                                                                                                                                </p>
                                <p>车到山前业务全国展业，合作的汽车服务商已万余家，业务范围包括车辆上牌、过户、救援、代驾、年检等多项服务，为车源处置方交易车辆提供了全国性的车辆本地及跨区域的车务供应链处置解决方案。
                                                                                                                                                                                                                                                                                                                                </p>
                                <p>我们的使命是：让车务办理更简单、更透明、更快捷。
                                                                                                                                                                                                                                                                                                                                </p>
                            </div>
                            <div className="mt-8 flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => <></>)}
                                </div>
                                <></>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2
                            }}
                            className="relative">
                            <div
                                className="absolute -top-4 -left-4 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
                            <div
                                className="absolute -bottom-4 -right-4 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20"></div>
                            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Modern%20office%20environment%2C%20professional%20team%20working&sign=6ee7549c1130adc53e03b7ba767a54e6"
                                    alt="办公环境"
                                    className="rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform" />
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Car%20service%20team%20meeting%2C%20collaboration%2C%20planning&sign=f919e152c71edbc4a0be700f775de653"
                                    alt="团队会议"
                                    className="rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform" />
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Customer%20service%20team%20assisting%20clients%2C%20professional%20support&sign=c614ff77a3b1960f12d96eac6f4eb5d5"
                                    alt="客户服务"
                                    className="rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform" />
                                <img
                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Car%20inspection%20service%2C%20professional%20technician%20checking%20vehicle&sign=2552648c53018ffcb4951f8da69d468a"
                                    alt="车辆检测"
                                    className="rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform" />
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section
                    id="services"
                    className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">车务服务流程与能力介绍</h2>
                        </motion.div>
                        {}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.7
                            }}
                            className={`mb-16 p-8 rounded-2xl ${theme === "dark" ? "bg-gray-800" : "bg-orange-50"}`}>
                            <h3 className="text-2xl font-bold mb-6">核心参与角色与流程</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                {[{
                                    role: "车主/客户",
                                    desc: "发起车务办理下单，由「车到山前」作为中间方承接订单并委派处理",
                                    icon: <Users className="h-8 w-8 text-orange-500" />
                                }, {
                                    role: "车到山前",
                                    desc: "作为核心服务平台，连接客户与线下服务资源，统筹订单与服务交付",
                                    icon: <Activity className="h-8 w-8 text-orange-500" />
                                }, {
                                    role: "存管团队",
                                    desc: "负责专业档案存管，保障客户资料安全",
                                    icon: <ShieldCheck className="h-8 w-8 text-orange-500" />
                                }, {
                                    role: "车务团队",
                                    desc: "提供专业车务代办服务，直接对接线下业务办理",
                                    icon: <Car className="h-8 w-8 text-orange-500" />
                                }, {
                                    role: "年检站/车管所",
                                    desc: "最终业务落地机构，分别负责车辆年检及各类车管所业务",
                                    icon: <ClipboardCheck className="h-8 w-8 text-orange-500" />
                                }].map((item, index) => <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 20
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}
                                    className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-750" : "bg-white shadow-md"}`}>
                                    <div className="mb-4">{item.icon}</div>
                                    <h4 className="text-lg font-bold mb-3">{item.role}</h4>
                                    <p
                                        className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{item.desc}</p>
                                </motion.div>)}
                            </div>
                        </motion.div>
                        {}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.7
                            }}
                            className={`mb-16`}>
                            <h3 className="text-2xl font-bold mb-8">核心服务能力与覆盖范围</h3>
                            <div
                                className={`p-8 rounded-2xl mb-8 ${theme === "dark" ? "bg-gray-800" : "bg-white shadow-lg"}`}>
                                <p className="text-lg mb-8 text-center">平台具备强大的全国服务网络</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {}
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={networkData} layout="vertical">
                                                <XAxis type="number" />
                                                <YAxis dataKey="name" type="category" width={100} />
                                                <Tooltip
                                                    formatter={(value, name, props) => [`${value}${props.payload.unit}`, props.payload.name]}
                                                    contentStyle={{
                                                        backgroundColor: theme === "dark" ? "#374151" : "white",
                                                        color: theme === "dark" ? "white" : "black",
                                                        borderRadius: "0.5rem",
                                                        border: "none",
                                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                                    }} />
                                                <Bar dataKey="value" fill="#f97316" radius={[0, 4, 4, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    {}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xl font-bold mb-3 flex items-center">
                                                <CheckCircle className="h-6 w-6 text-orange-500 mr-2" />年检服务
                                                                                                                                                                                                                                                                                            </h4>
                                            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>覆盖全国29个省市自治区，依托1000+合作检测站完成车辆年检。
                                                                                                                                                                                                                                                                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-3 flex items-center">
                                                <CheckCircle className="h-6 w-6 text-orange-500 mr-2" />车管所相关业务
                                                                                                                                                                                                                                                                                            </h4>
                                            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>上牌、过户、抵/解押等业务已落地全国200+地级市、400+县级市。
                                                                                                                                                                                                                                                                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-3 flex items-center">
                                                <CheckCircle className="h-6 w-6 text-orange-500 mr-2" />服务保障
                                                                                                                                                                                                                                                                                            </h4>
                                            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>拥有2000+现场服务团队、500+合作服务站、1000+合作服务商，完善的组织架构与行业经验确保服务质量与时效。
                                                                                                                                                                                                                                                                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.7
                            }}
                            className={`relative p-8 md:p-10 rounded-2xl overflow-hidden shadow-xl ${theme === "dark" ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-900/30" : "bg-white border border-orange-100"}`}>
                            {}
                            <div
                                className="absolute -top-20 -right-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
                            <div
                                className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-400 rounded-full blur-3xl opacity-20"></div>
                            {}
                            <div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/30 to-amber-400/30 opacity-70 blur-sm -m-px"></div>
                            <div className="relative z-10">
                                {}
                                <div className="flex justify-center mb-6">
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-orange-500/20" : "bg-orange-100"}`}>
                                        <CheckCircle className="h-8 w-8 text-orange-500" />
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">服务价值总结</h3>
                                {}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[{
                                        title: "省心",
                                        desc: "专业团队全程代办，无需亲自奔波",
                                        icon: <ShieldCheck className="h-6 w-6 text-orange-500" />
                                    }, {
                                        title: "便捷",
                                        desc: "全国服务网络，一站式解决所有问题",
                                        icon: <Car className="h-6 w-6 text-orange-500" />
                                    }, {
                                        title: "可靠",
                                        desc: "存管团队保障资料安全，流程透明可控",
                                        icon: <CheckCircle className="h-6 w-6 text-orange-500" />
                                    }].map((value, index) => <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 10
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2 + index * 0.1
                                        }}
                                        className={`p-5 rounded-xl text-center ${theme === "dark" ? "bg-gray-800/80 hover:bg-gray-750" : "bg-orange-50 hover:bg-orange-100"} transition-colors`}>
                                        <div
                                            className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${theme === "dark" ? "bg-orange-500/20" : "bg-white"}`}>
                                            {value.icon}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                                        <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{value.desc}</p>
                                    </motion.div>)}
                                </div>
                                <p
                                    className={`text-lg text-center mx-auto max-w-4xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>「车到山前」通过专业团队代办+全国服务网络，让车主无需亲自奔波于年检站、车管所，即可高效完成各类车务办理，同时通过存管团队保障资料安全，实现「省心、便捷、可靠」的车务体验。
                                                                                                                                            </p>
                                {}
                                <div className="mt-8 flex justify-center">
                                    <div
                                        className={`w-24 h-1 rounded-full ${theme === "dark" ? "bg-orange-500/50" : "bg-orange-300"}`}></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section
                    id="process"
                    className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6
                                }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">金融及融资租赁类车务业务</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">我们拥有完善的标准操作流程，确保每一项服务都能高效、规范地完成
                                                                                                                                                                                                                                                                                                                                                    </p>
                            </motion.div>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            {}
                            <div className="lg:w-1/4 mb-10 lg:mb-0 lg:pr-10">
                                <div className="space-y-4">
                                    {processSteps.map(step => <motion.button
                                        key={step.id}
                                        initial={{
                                            opacity: 0,
                                            x: -20
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: step.id * 0.1
                                        }}
                                        onClick={() => setActiveProcess(step.id)}
                                        className={cn(
                                            "w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center",
                                            activeProcess === step.id ? theme === "dark" ? "bg-orange-500/20 text-orange-500 border-l-4 border-orange-500" : "bg-orange-50 text-orange-500 border-l-4 border-orange-500 shadow-md" : theme === "dark" ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-50 hover:bg-gray-100"
                                        )}>
                                        <div
                                            className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0",
                                                activeProcess === step.id ? "bg-orange-500 text-white" : theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                                            )}>
                                            {step.id}
                                        </div>
                                        <span className="font-medium">{step.title}</span>
                                    </motion.button>)}
                                </div>
                            </div>
                            {}
                            <div className="lg:w-3/4">
                                {processSteps.map(process => <motion.div
                                    key={process.id}
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: activeProcess === process.id ? 1 : 0
                                    }}
                                    transition={{
                                        duration: 0.5
                                    }}
                                    className={`${activeProcess === process.id ? "block" : "hidden"}`}>
                                    <div
                                        className={cn(
                                            "p-8 rounded-2xl",
                                            theme === "dark" ? "bg-gray-800" : "bg-gray-50 border border-gray-100"
                                        )}>
                                        <h3 className="text-2xl font-bold mb-6">{process.title}</h3>
                                        <div className="space-y-6">
                                            {process.steps.map((step, index) => <motion.div
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    y: 10
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1
                                                }}
                                                className="flex">
                                                <div className="mr-4 mt-1">
                                                    <div
                                                        className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-xs font-bold">{index + 1}</span>
                                                    </div>
                                                    {index < process.steps.length - 1 && <div className="w-0.5 h-full bg-orange-200 dark:bg-orange-900/30 mx-auto mt-2"></div>}
                                                </div>
                                                <div className="pb-6">
                                                    <p
                                                        className={cn(
                                                            "text-gray-700 dark:text-gray-300",
                                                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                                                        )}>
                                                        {step}
                                                    </p>
                                                </div>
                                            </motion.div>)}
                                        </div>
                                    </div>
                                </motion.div>)}
                            </div>
                        </div>
                    </div>
                </section>
                {}
                <></>
                {}
                <section
                    id="cases"
                    className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6
                                }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">成功案例</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">我们已经为众多企业和个人提供了专业的车务服务，以下是部分成功案例
                                                                                                                                                                                                                                                                                                                                                    </p>
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {cases.map((case_study, index) => <motion.div
                                key={case_study.id}
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                className={cn(
                                    "rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl",
                                    theme === "dark" ? "bg-gray-800" : "bg-white shadow-md hover:shadow-orange-100"
                                )}>
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={case_study.imageUrl}
                                        alt={case_study.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{case_study.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{case_study.description}</p>
                                    <></>
                                </div>
                            </motion.div>)}
                        </div>
                    </div>
                </section>
                {}
                <></>
                {}
                <section
                    className="py-16 bg-gradient-to-r from-orange-500 to-amber-400 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.6
                            }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">让车务办理变得简单</h2>
                            <p className="text-lg mb-8 mx-auto opacity-90 whitespace-nowrap">无论您需要车辆上牌、过户、年检还是其他车务服务，我们都能为您提供专业、高效、便捷的解决方案</p>
                            <></>
                        </motion.div>
                    </div>
                </section>
            </main>
            {}
            <footer
                className={theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}>
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div>
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/328981205506/attachment/logo_20260319141013.png"
                                    alt="车到山前"
                                    className="h-12 w-auto mr-2" />
                                <></>
                            </div>
                            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>让车务办理更简单、更透明、更快捷
                                                                                                                                                                                                                                                </p>
                            <></>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">服务项目</h3>
                            <ul className="space-y-2">
                                <li><a
                                        href="#"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>车辆过户/跨省通办</a></li>
                                <li><a
                                        href="#"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>车辆备案解押抵押</a></li>
                                <li><a
                                        href="#"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>物流代驾</a></li>
                                <li><a
                                        href="#"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>车辆上牌</a></li>
                                <li><a
                                        href="#"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>车辆年检</a></li>
                                <li><a
                                        href="#"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>客户邀约</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">关于我们</h3>
                            <ul className="space-y-2">
                                <li><a
                                        href="#about"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>关于我们</a></li>
                                <li><a
                                        href="#services"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>车务服务</a></li>
                                <li><a
                                        href="#process"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>金融业务</a></li>
                                <li><a
                                        href="#cases"
                                        className={theme === "dark" ? "text-gray-400 hover:text-orange-500" : "text-gray-600 hover:text-orange-500"}>成功案例</a></li>
                                <></>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={cn("pt-8 border-t", theme === "dark" ? "border-gray-800" : "border-gray-200")}>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className={theme === "dark" ? "text-gray-500" : "text-gray-600"}>© 2026 广州车到山前科技有限公司 版权所有 | 粤ICP备12345678号
                                                                                                                                                                                                                                                                                                              </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a
                                    href="#"
                                    className={theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-600 hover:text-gray-800"}>隐私政策</a>
                                <a
                                    href="#"
                                    className={theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-600 hover:text-gray-800"}>服务条款</a>
                                <a
                                    href="#"
                                    className={theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-600 hover:text-gray-800"}>法律声明</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}