import img1 from '../assets/Programs/1.png';
import img2 from '../assets/Programs/2.png';
import img3 from '../assets/Programs/3.png';
import img4 from '../assets/Programs/4.png';
import img5 from '../assets/Programs/5.png';
import imgAarambh from '../assets/WelcomePopup/hero_img_2.png';

let ProgramsList = [
  {
    'id': 100,
    'image': imgAarambh
  },
  {
    'id': 73,
    'title': 'Tech Neck Program',
    'start_date': '06-07-2024',
    'image': img2,
    'sections': 1,
    'lectures': 1,
    'price': '€9.00',
    'original_price': '€29.00',
    'description': 'This program is specifically curated to relieve pain and stiffness associated with Tech Neck, Forward Head Posture, and related neck discomfort.',
    'benefits': [
      {
        'mainHeading': 'Pain and Stiffness Relief',
        'subHeading': 'All asanas in this program are designed to release tension and reduce stiffness in the neck, providing immediate relief and easing muscle tightness.'
      },
      {
        'mainHeading': 'Mind-Body Connection',
        'subHeading': 'Stretching neck muscles helps diffuse stress held in the body, creating a relaxing effect that positively influences your state of mind.'
      },
      {
        'mainHeading': 'Muscle Strengthening',
        'subHeading': 'By strengthening neck muscles, the program improves posture, correcting the forward head posture that often leads to neck pain.'
      },
      {
        'mainHeading': 'Reduced Tension and Headaches',
        'subHeading': 'Lengthening the larger muscles helps prevent tension headaches and reduces neck stiffness.'
      }
    ]
  },
  {
    'id': 72,
    'start_date': '',
    'title': 'Hip Harmony',
    'price': '€19.99',
    'original_price': '€39.99',
    'sections': 1,
    'lectures': 2,
    'image': img1,
    'description': 'This hip-opening program is designed to address tightness and poor circulation caused by a sedentary lifestyle.',
    'benefits': [
      {
        'mainHeading': 'Improved Flexibility',
        'subHeading': 'The hip-opening sequence gradually improves the mobility of your hips and spine, allowing for easier forward bends.'
      },
      {
        'mainHeading': 'Reduced Pain',
        'subHeading': 'Relieves pressure on the lower back by easing the tension in the hips, preventing strain and injury.'
      },
      {
        'mainHeading': 'Enhanced Body Alignment',
        'subHeading': 'Promotes a more balanced and aligned posture by working on the foundational alignment of the hips.'
      },
      {
        'mainHeading': 'Release of Stored Emotions',
        'subHeading': 'Hips are associated with the root chakra, and stretching helps release pent-up negative emotions like fear and guilt, leading to greater emotional freedom.'
      },
      {
        'mainHeading': 'Energetic Release',
        'subHeading': 'An immediate sense of emotional and mental release occurs after hip-opening practices, creating space for positive emotions and mental clarity.'
      },
      {
        'mainHeading': 'Active Body and Mind',
        'subHeading': 'By following a carefully curated sequence of yoga poses and stretches, participants will develop a more active body and mind while reducing tension in the hips and enhancing overall posture.'
      }
    ]
  },
  {
    'id': 74,
    'title': 'Parsva Kriya Workshop',
    'start_date': '',
    'image': img3,
    'sections': 1,
    'lectures': 2,
    'price': '€19.99',
    'original_price': '€39.99',
    'description': 'The Parsva Kriya Workshop is tailored for yoga enthusiasts aiming to enhance their Pranayama (breathing) practices through targeted side trunk extensions.',
    'benefits': [
      {
        'mainHeading': 'Enhanced Lung Capacity',
        'subHeading': 'The exercises are designed to treat the lungs as a three-dimensional structure, expanding their capacity and functionality which is crucial for deepening breathwork in Pranayama practices.'
      },
      {
        'mainHeading': 'Improved Postural Awareness',
        'subHeading': 'Participants will develop a deeper understanding of their body\'s alignment, learning to correct and maintain posture that supports overall spine health and eases back pain.'
      },
      {
        'mainHeading': 'Increased Core and Organ Space',
        'subHeading': 'The asanas focus on opening the sides of the body and expanding the ribs, which helps to create more space for abdominal organs and the diaphragm. This results in an enhanced flow of blood and energy through the body’s main channels.'
      },
      {
        'mainHeading': 'Mental and Physical Relief',
        'subHeading': 'The sequence aids in lengthening and decompressing the spine, which can alleviate nerve compression and promote better spinal health. The increased elasticity and range of motion in the spine contribute to a feeling of lightness and buoyancy in the upper body, fostering feelings of serenity and happiness.'
      }
    ]
  },
  {
    'id': 75,
    'title': 'Unnati Program',
    'start_date': '',
    'image': img4,
    'price': '€29.00',
    'sections': 1,
    'lectures': 3,
    'original_price': '€39.00',
    'description': 'The Unnati Program is a transformative three-day workshop designed to help employees handle their daily lives with ease and joy.',
    "benefits": [
      {
        "mainHeading": "Enhanced Concentration",
        "subHeading": "The program strengthens the power of concentration, helping participants focus better and maintain a balanced state of mind."
      },
      {
        "mainHeading": "Stress Management",
        "subHeading": "It empowers participants to handle stressful situations with ease, giving them the resilience needed to navigate their daily challenges."
      },
      {
        "mainHeading": "Improved Physical Health",
        "subHeading": "The yoga practices taught in the Unnati Program improve spine health, overall physical fitness, and respiratory function."
      },
      {
        "mainHeading": "Gratitude and Emotional Health",
        "subHeading": "Inculcating a sense of gratitude towards the universe promotes emotional health, while the program's meditation tools lead to better energy levels and emotional balance."
      },
      {
        "mainHeading": "Increased Awareness",
        "subHeading": "Over time, participants develop improved awareness, which is crucial for their well-being and productivity at work."
      }
    ]
  },
  {
    'id': 76,
    'title': 'ATE Program',
    'start_date': '22-07-2024',
    'sections': 12,
    'lectures': 36,
    'image': img5,
    'price': '€249.00',
    'original_price': '€299.00',
    'description': 'The Alignment to Enlightenment (ATE) program is a comprehensive 12-week journey focused on achieving the correct alignment in asanas and pranayama.',
    "benefits": [
      {
        "mainHeading": "Correct Asana Practice",
        "subHeading": "Participants learn the correct way to perform asanas, ensuring safe and effective posture."
      },
      {
        "mainHeading": "Enhanced Physiology Understanding",
        "subHeading": "The program provides a solid understanding of how the body functions during practice."
      },
      {
        "mainHeading": "Alignment Awareness",
        "subHeading": "Developing alignment awareness in poses enhances the connection between body and mind."
      },
      {
        "mainHeading": "Improved Strength and Flexibility",
        "subHeading": "With regular practice, participants will build stronger muscles, increase flexibility, and improve endurance."
      },
      {
        "mainHeading": "Pain and Ache Reduction",
        "subHeading": "Proper alignment helps eliminate pain and aches by correcting posture-related issues."
      },
      {
        "mainHeading": "Higher Energy Levels",
        "subHeading": "Pranayama and meditation practices work together to boost energy and focus."
      },
      {
        "mainHeading": "Clearing Energy Blockages",
        "subHeading": "Bandha practices help clear subtle energy blockages for optimal flow."
      },
      {
        "mainHeading": "Respiratory System Improvement",
        "subHeading": "The program strengthens the respiratory system through deep breathing techniques."
      },
      {
        "mainHeading": "Relaxation and Mindfulness",
        "subHeading": "Guided Shavasana ensures relaxation, while mantra chanting improves focus and willpower."
      }
    ]
  },
];

export default ProgramsList;
