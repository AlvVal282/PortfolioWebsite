'use client';
// material-ui
import Typography from '@mui/material/Typography';
import { Button, Divider, Box, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

// project imports
import MainCard from 'components/MainCard';

import { useTheme } from '@mui/material/styles';

// ==============================|| HOME PAGE ||============================== //

export default function HomePage() {
  const theme = useTheme();
  const router = useRouter();

  const handleImageAppClick = () => {
    router.push('/imagerecognition/image-page');
  };

  return (
    <MainCard
      title="Alvaro Valdez-Duran"
      sx={{
        boxShadow: 3,
        padding: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        maxWidth: '900px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
        Alvaro Valdez-Duran
      </Typography>
      <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
      B.S. Computer Science – UW Tacoma | Future Security Engineer
      </Typography>

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
          I’m a Computer Science graduate from the University of Washington Tacoma, aspiring to become a future Security Engineer. 
          I am passionate about cybersecurity, specializing in threat detection, incident response, and security automation. 
          With a solid foundation in software engineering and scripting, I leverage technical skills to monitor networks, analyze security logs, 
          and develop tools that enhance organizational security posture.
      </Typography>

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Technical Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginBottom: 2
        }}
      >
        <Typography variant="body2">
          Languages: Python, C, C#, Java, JavaScript, TypeScript, SQL, R
        </Typography>
        <Typography variant="body2">
          Frameworks & Tools: React, Next.js, Docker, Node.js, LibGDX, Postman, Kubernetes, MAESTRO
        </Typography>
        <Typography variant="body2">
          Cloud Platforms: Azure, Render, AWS
        </Typography>
        <Typography variant="body2">
          Compliance & Standards: FedRAMP, SOC 2, ISO 27001, Model Context Protocol
        </Typography>
        <Typography variant="body2">
          Developer Tools: Git, GitHub, VS Code, IntelliJ, PyCharm
        </Typography>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Notable Projects
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Stuxnet Security Analysis:</strong> Conducted an in-depth security analysis of the Stuxnet malware, 
          examining its propagation, exploitation techniques, and impact on industrial control systems (ICS). 
          Produced a detailed report summarizing findings, attack vectors, and mitigation strategies.{' '}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Dungeon Adventure:</strong> A 2D dungeon exploration game using LibGDX and Java, focusing on player movement, combat
          mechanics, and immersive design.{' '}
          <Link href="https://github.com/AlvVal282/Dungeon-Adventure" target="_blank">
            View on GitHub
          </Link>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Library Book Management System:</strong> A full-stack app using React, Node.js, and PostgreSQL, with features for managing
          books and user authentication.{' '}
          <Link href="https://github.com/AlvVal282/Team5Front-End" target="_blank">
            View Front-End on Github
          </Link>
          <br />
          <Link href="https://github.com/AlvVal282/Team5Back-End" target="_blank">
            View Back-End on Github
          </Link>
        </Typography>
      </Box>
      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Explore My Image Recognition App!
      </Typography>
      <Typography variant="body1" paragraph>
        Upload an image to see state-of-the-art AI in action. Identify objects, landmarks, and scenes effortlessly.
      </Typography>
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '25px'
          }}
          onClick={handleImageAppClick}
        >
          Try It Out!
        </Button>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      {/* Footer Section */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
          Connect with me
        </Typography>
        <Box>
          <IconButton component={Link} href="https://www.linkedin.com/in/alvaro-valdez-duran/" target="_blank" sx={{ margin: 1 }}>
            <LinkedIn fontSize="large" color="primary" />
          </IconButton>
          <IconButton component={Link} href="https://github.com/AlvVal282" target="_blank" sx={{ margin: 1 }}>
            <GitHub fontSize="large" color="primary" />
          </IconButton>
        </Box>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }} component={Link} href="/resume-page" target="_blank">
          View My Resume
        </Button>
      </Box>
    </MainCard>
  );
}
