import React from 'react';
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const FormatToolbarStyle = styled.div`
	border-bottom: solid 1.7px rgba(199,198,255,0.15);
	background:rgb(121, 210, 206);
  position:relative;
  width:inherit;
  max-width:inherit;
  z-index:1;
`;

const DropDownStyle= styled.div`
    display: inline-block;
    overflow:hidden;
    padding:2px;
    }
`

export const FormatToolbar = props =>(
	<FormatToolbarStyle id="toolbar">
		<div style={{padding:'10px 5px'}}>
      {props.children}
    </div>
	</FormatToolbarStyle>
)

export const HeaderDropDown = props =>(
	<DropDownStyle>
		<button style={{
                cursor:'pointer',
                border:'none',
                outline:'none',
                backgroundColor:'inherit',
                letterSpacing:'2px',
                fontSize:'1.2em'
              }} 
              onClick={(e)=>{
                e.preventDefault;
                let el= document.getElementById('dropdownbtn');
                if(el.style.display=='block')
                  el.style.display='none'
                else
                  el.style.display='block'
              }}
              >

              {props.header}
              <ArrowDropDownIcon/>
            
         </button>
         <ul
              id='dropdownbtn'
              style={{position:'absolute',
                      display:'none',
                      background:'white',
                      border:'1px solid #cecece',
                      listStyle:'none',
                      zIndex:'2',
                      padding:'15px',
                      margin:'5px'}}
              onClick={(e)=>{
                            let el= document.getElementById('dropdownbtn');
                            el.style.display='none'
                          }}
            >
			{props.children && props.children.map((child,index)=><li key={`dropdown-${index}`}>{child}</li>)}
		</ul>
	</DropDownStyle>
);

export const MarkButton = ({ editor, type, icon }) => {
  const { value } = editor
  const isActive = value.activeMarks.some(mark => mark.type === type)
  return (
    <div
        onMouseDown={event => {
        event.preventDefault()
        editor.toggleMark(type)
      }}
        style={{
              float:'left',
              cursor:'pointer',
              color:'black',
              backgroundColor:`${isActive?'#e4e4e4':'rgb(121, 210, 206)'}`,
              padding:'0 5px'
            }}>
                  {typeof icon.component === "string" ? (
                          <Icon>{icon.component}</Icon>
                        ) : (
                          <icon.component />
                    )}
    </div>
  )
}



export const ToolbarButton = ({ editor, type, icon }) => {
  const { value } = editor
  const isActive = value.activeMarks.some(mark => mark.type === type)
  return (
    <div
        onMouseDown={event => {
        event.preventDefault()
        editor.toggleMark(type)
      }}
        style={{
              padding:'0 10px',
              cursor:'pointer',
              backgroundColor:`${isActive?'#e4e4e4':'#fdfaf5'}`
            }}>
                  {typeof icon.component === "string" ? (
                          <Icon>{icon.component}</Icon>
                        ) : (
                          <icon.component />
                    )}
    </div>
  )
};

export const ToolbarButtonDump = ({icon,handler}) => {
  return (
    <div
        onMouseDown={handler}
        style={{
              padding:'0 10px',
              cursor:'pointer',
              backgroundColor:'white'
            }}>
                  {typeof icon.component === "string" ? (
                          <Icon>{icon.component}</Icon>
                        ) : (
                          <icon.component />
                    )}
    </div>
  )
};

export const MarkButtonLink = ({editor,icon,handler}) => {
          const { value } = editor
          const isActive =value.inlines.some(inline => inline.type === 'link')
  return (
    <div
        onMouseDown={handler}
        style={{
              float:'left',
              cursor:'pointer',
              color:'black',
              backgroundColor:`${isActive?'#e4e4e4':'rgb(121, 210, 206)'}`,
              padding:'0 5px'
            }}>
                  {typeof icon.component === "string" ? (
                          <Icon>{icon.component}</Icon>
                        ) : (
                          <icon.component />
                    )}
    </div>
  )
};
