// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Track.css";
// import { FaTruckFast, FaShoppingCart, FaChevronDown, FaReceipt, FaBoxOpen, FaDolly, FaTruck, FaCheckCircle } from "react-icons/fa6";

// const TrackOrder = () => {
//   const [trackingNumber, setTrackingNumber] = useState("");
//   //const [progressWidth, setProgressWidth] = useState("60%"); // مبدئي
//  // const [status, setStatus] = useState("في الطريق");
//   const [deliveryDate] = useState("23 سبتمبر 2025");

//   const handleTrack = () => {
//     console.log("Tracking Number:", trackingNumber);
//   };

//   return (
//     <>
      

//       <main className="container">
//         <div className="track-wrapper">
//           <h1>تتبع شحنتك</h1>
//           <p>أدخل رقم تتبع الشحنة الخاص بك لمعرفة حالتها وموقعها الحالي.</p>

//           <div className="track-form">
//             <input
//               type="text"
//               placeholder="مثال: ELK-123456789"
//               value={trackingNumber}
//               onChange={(e) => setTrackingNumber(e.target.value)}
//             />
//             <button onClick={handleTrack}>تتبع</button>
//           </div>

//           {/* Timeline */}
//           <div className="timeline">
//             <div
//               className="timeline-progress"
//              // style={{ width: progressWidth }}
//             ></div>
//             <div className="timeline-steps">
//               <div className="timeline-step completed">
//                 <div className="timeline-icon"><FaReceipt /></div>
//                 <h4>تم استلام الطلب</h4>
//               </div>
//               <div className="timeline-step completed">
//                 <div className="timeline-icon"><FaBoxOpen /></div>
//                 <h4>قيد التجهيز</h4>
//               </div>
//               <div className="timeline-step completed">
//                 <div className="timeline-icon"><FaDolly /></div>
//                 <h4>تم الشحن</h4>
//               </div>
//               <div className="timeline-step active">
//                 <div className="timeline-icon"><FaTruck /></div>
//                 <h4>في الطريق</h4>
//               </div>
//               <div className="timeline-step">
//                 <div className="timeline-icon"><FaCheckCircle /></div>
//                 <h4>تم التسليم</h4>
//               </div>
//             </div>
//           </div>

//           {/* Order Info */}
//           <div className="order-status-info">
//             <h3>الحالة الحالية: {status}</h3>
//             <p>شحنتك الآن في الطريق من القاهرة إلى بني سويف. الموعد المتوقع للتسليم: {deliveryDate}.</p>
//           </div>
//         </div>
//       </main>

     
//     </>
//   );
// };

// export default TrackOrder;
