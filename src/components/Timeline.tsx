"use client";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import { Chip } from '@mui/material';

type Project = {
  title: string;
  description: string;
  name: string;
  demo: string;
  code: string;
  startDate: string;
  endDate?: string;
  tech: string[];
  category: 'school' | 'work' | 'personal';
};

type Milestone = {
  date: string;
  title: string;
  category: string;
};

type Event = {
  type: 'project' | 'milestone';
  title: string;
  subtitle?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  dateForSorting: string;
  tech?: string[];
  category?: 'school' | 'work' | 'personal';
};

export function Timeline({ projects, milestones }: { projects: Project[]; milestones: Milestone[] }) {
  const present = new Date().toISOString().slice(0,10);
  const events: Event[] = [
    ...projects.map(p => ({
      type: 'project',
      title: p.title,
      subtitle: p.name,
      description: p.description,
      startDate: p.startDate,
      endDate: p.endDate && p.endDate !== '' ? p.endDate : 'Present',
      dateForSorting: p.endDate && p.endDate !== '' ? p.endDate : present,
      tech: p.tech,
      category: p.category
    })),
    ...milestones.map(m => ({
      type: 'milestone',
      title: m.title,
      dateForSorting: m.date,
      category: m.category
    }))
  ].sort((a,b) => new Date(b.dateForSorting).valueOf() - new Date(a.dateForSorting).valueOf());

  const getIcon = (e: Event) => {
    if (e.category === 'work') return <WorkIcon />;
    if (e.category === 'school') return <SchoolIcon />;
    if (e.category === 'personal') return <PersonIcon />;
    if (e.type === 'milestone') return <StarIcon />;
    return <StarIcon />;
  };

  return (
    <VerticalTimeline>
      {events.map((e,i) => {
        const dateString = e.type === 'project'
          ? `${e.startDate} - ${e.endDate}`
          : e.dateForSorting;
        return (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            date={dateString}
            contentStyle={{ background: '#f5f5f5', color: '#000', borderRadius: '8px', border: '1px solid #ddd' }}
            contentArrowStyle={{ borderRight: '7px solid #f5f5f5' }}
            iconStyle={{
              background: e.category 
                ? e.category === 'work' 
                  ? 'rgb(33, 150, 243)' 
                  : e.category === 'school' 
                    ? 'rgb(244, 67, 54)' 
                    : 'rgb(76, 175, 80)' 
                : 'rgb(255, 235, 59)',
              color: '#fff'
            }}            
            icon={getIcon(e)}
          >
            <h3 style={{margin:'0 0 8px',fontSize:'1.25rem',fontWeight:'600',color:'#333'}}>{e.title}</h3>
            {e.subtitle && <h4 style={{margin:'0 0 8px',fontSize:'1rem',fontWeight:'500',color:'#555'}}>{e.subtitle}</h4>}
            {e.description && <p style={{margin:'0 0 8px',color:'#444',lineHeight:'1.4'}}>{e.description}</p>}
            {e.tech && (
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                {e.tech.map((t,idx) => (
                  <Chip key={idx} label={t} style={{ backgroundColor: '#e0f7fa', color: '#006064', fontWeight: '600' }}/>
                ))}
              </div>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
