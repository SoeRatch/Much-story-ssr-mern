import axios from 'axios';
import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import FormatItalic from "@material-ui/icons/FormatItalic";
import FormatBold from "@material-ui/icons/FormatBold";
import FormatUnderlined from "@material-ui/icons/FormatUnderlined";
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LinkIcon from '@material-ui/icons/Link';
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CodeIcon from "@material-ui/icons/Code";
import ImageIcon from '@material-ui/icons/Image';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import Button from '@material-ui/core/Button';
import { Editor,getEventTransfer } from 'slate-react'
import {  Block,Value } from 'slate'
import Plain from 'slate-plain-serializer'
import Html from 'slate-html-serializer'
import imageExtensions from 'image-extensions'
import isUrl from 'is-url'
import { isKeyHotkey } from 'is-hotkey'
import { FormatToolbar,HeaderDropDown,MarkButton,ToolbarButton,ToolbarButtonDump,MarkButtonLink } from './FormatToolbar';
import { BlockButton } from './EditingButtons';

const existingValue = typeof window !== 'undefined' && window.localStorage.getItem('content');

const initialValue = existingValue || '<p></p>'


const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')

const ToolTipIconButton = styled.button`
  border:0;
`;

const HoverMenuStyle = styled.div`
        padding: 8px 7px;
        position: absolute;
        z-index: 1;
        top: -10000px;
        left: -10000px;
        margin-top: -6px;
        opacity: 0;
        background-color:rgb(121, 210, 206);
        border-radius: 4px;
        transition: opacity 0.75s;
        color:white;
`;


function wrapLink(editor,href){
  editor.wrapInline({
    type:'link',
    data:{href}
  });

  editor.moveToEnd();

}

function unwrapLink(editor){
  editor.unwrapInline('link');
}


function isImage(url) {
  return imageExtensions.includes(getExtension(url))
}

function getExtension(url) {
  return new URL(url).pathname.split('.').pop()
}

function insertImage(editor, src, target) {
  if (target) {
    editor.select(target)
  }

  editor.insertBlock({
    isVoid: true,
    type: 'image',
    data: { src },
  }).insertBlock('paragraph');
}



const schema = {
  document: {
    last: { type: 'paragraph' },
    normalize: (editor, { code, node, child }) => {
      switch (code) {
        case 'last_child_type_invalid': {
          const paragraph = Block.create('paragraph')
          return editor.insertNodeByKey(node.key, node.nodes.size, paragraph)
        }
      }
    },
  },
  blocks: {
    image: {
      isVoid: true,
    },
  },
}


  

const BLOCK_TAGS = {
  p: 'paragraph',
  list:'list-item',
  ul:'bulleted-list',
  ol:'numbered-list',
  h1:'h1',
  h2:'h2',
  h3:'h3',
  h4:'h4',
  img:'image', 
  blockquote:'blockquote'
}

const MARK_TAGS = {
  strong: 'bold',
  em: 'italic',
  u: 'underline',
  del:'strikethrough',
  code:'code'
}

const INLINE_TAGS={
    a:'link'
};







const rules = [
  // Add our first rule with a deserializing function.
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'block',
          type: type,
          data: {
            className: el.getAttribute('class'),
            src:el.getAttribute('src')
          },
          nodes: next(el.childNodes),
        }
      }
    },

    serialize(obj, children) {
      if (obj.object == 'block') {
        switch (obj.type) {
          case 'paragraph':
            return <p className={obj.data.get('className')}>{children}</p>
          case 'list-item':
            return <li>{children}</li>
          case 'bulleted-list':
            return <ul>{children}</ul>

          case 'numbered-list':
            return <ol>{children}</ol>

          case 'h1':
            return <h1>{children}</h1>
          case 'h2':
            return <h2>{children}</h2>
          case 'h3':
            return <h3>{children}</h3>
          case 'h4':
            return <h4>{children}</h4>
          case 'image':
            return (
              <figure>
              <img
                style={{display:'block',maxWidth:'100%',maxHeight:'20em',boxShadow:'0 0 0 2px blue'}}
                src={obj.data.get('src')}
              />
              </figure>
            )

          case 'blockquote':
            return <blockquote>
                      {children}
                  </blockquote>;
        }
      }
    }

  },



  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>
          case 'italic':
            return <em>{children}</em>
          case 'underline':
            return <u>{children}</u>

          case 'strikethrough':
            return <del>
                    {children}
                  </del>;
          case 'code':
            return <code>{children}</code>;

        }
      }
    },
  },


  {
    deserialize(el, next) {
      const type = INLINE_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'inline',
          type: type,
          data: {
            className: el.getAttribute('class'),
            href:el.getAttribute('href')
          },
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'inline') {
        switch (obj.type) {
          case 'link':
            return <a href={obj.data.get('href')}>{children}</a>;
          }
      }
    }
}


]

const html = new Html({ rules });







class SlateEditor extends Component{

  state = {
    value: html.deserialize(initialValue), //html to slate format
    
  }

  menuRef = React.createRef()

  ref = editor => {
        this.editor = editor
  }

  componentDidMount = () => {
     this.updateMenu();
  }

  componentDidUpdate = () => {
    this.updateMenu()
  }

  onChange = ({ value }) => {
    
   if (value.document != this.state.value.document) {
      const string = html.serialize(value);    // slate format to html format
      localStorage.setItem('content', string)
    }

    this.setState({ value });

  }

  

  hasLinks = () => {
    const { value } = this.state
    return value.inlines.some(inline => inline.type === 'link')
  }

  onKeyDown = (event, editor, next) => {
    let mark

    if (isBoldHotkey(event)) {
      mark = 'bold'
    } else if (isItalicHotkey(event)) {
      mark = 'italic'
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined'
    } else if (isCodeHotkey(event)) {
      mark = 'code'
    } else {
      return next()
    }

    event.preventDefault()
    editor.toggleMark(mark)
  }


  renderMark= props =>{
    switch(props.mark.type){
      case 'bold':
        return <strong {...props.attributes}>
                {props.children}
              </strong>;

      case 'italic':
        return <em {...props.attributes}>
                {props.children}
              </em>

      case 'underline':
        return <u {...props.attributes}>
                {props.children}
              </u>;

      case 'strikethrough':
        return <del {...props.attributes}>
                {props.children}
              </del>;
      case 'code':
        return <code {...props.attributes}>{props.children}</code>;
      
      default:
        return next();
    }
  }

  renderInline= props =>{
    switch(props.node.type){
      case 'link':{
        const {data} = props.node;
        const href = data.get('href');
        return(
            <a {...props.attributes} href={href}>
              {props.children}
            </a>
          );
      }

      default: {
        return next()
      }

    }
  }

  renderBlock = (props, editor, next) => {

    switch (props.node.type) {
      case 'image': {
        const src = props.node.data.get('src')
        return (
          <figure {...props.attributes}>
          <img
            src={src}
            style={{display:'block',maxWidth:'100%',maxHeight:'20em',boxShadow:'0 0 0 2px blue'}}
          />
          </figure>
        )
      }

      case 'paragraph':
        return (
          <p {...props.attributes} className={props.node.data.get('className')}>
            {props.children}
          </p>
        );

      case 'list-item':
        return <li {...props.attributes}>{props.children}</li>

      case 'bulleted-list':
        return <ul {...props.attributes}>{props.children}</ul>

      case 'numbered-list':
        return <ol {...props.attributes}>{props.children}</ol>

      case 'h1':
        return <h1 {...props.attributes}>{props.children}</h1>
      case 'h2':
        return <h2 {...props.attributes}>{props.children}</h2>
      case 'h3':
        return <h3 {...props.attributes}>{props.children}</h3>
      case 'h4':
        return <h4 {...props.attributes}>{props.children}</h4>

      case 'blockquote':
        return <blockquote {...props.attributes}>
                  {props.children}
              </blockquote>;

      default: {
        return next()
      }
    }
  }

  

  onPaste=(event,editor,next)=>{
    if(editor.value.selection.isCollapsed)
      return next();

    const transfer = getEventTransfer(event);
    const {type,text}=transfer;

    if(type!=='text' && type!=='html')
      return next();

    if(!isUrl(text))
      return next();

    if(this.hasLinks())
      editor.command(unwrapLink);

    editor.command(wrapLink,text);

  }

    onDropOrPaste = (event, editor, next) => {
    const target = editor.findEventRange(event)
    if (!target && event.type === 'drop') return next()

    const transfer = getEventTransfer(event)
    const { type, text, files } = transfer

    if (type === 'files') {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')
        if (mime !== 'image') continue

        reader.addEventListener('load', () => {
          editor.command(insertImage, reader.result, target)
        })

        reader.readAsDataURL(file)
      }
      return
    }

    if (type === 'text') {
      if (!isUrl(text)) return next()
      if (!isImage(text)) return next()
      editor.command(insertImage, text, target)
      return
    }

    next()
  }




  updateMenu = () => {
    const menu = this.menuRef.current
    if (!menu) return

    const { value } = this.state
    const { fragment, selection } = value

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      menu.removeAttribute('style')
      return
    }

    const native = window.getSelection()
    const range = native.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    menu.style.opacity = 1
    menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`

    menu.style.left = `${rect.left +
      window.pageXOffset -
      menu.offsetWidth / 2 +
      rect.width / 2}px`
  }

  onMarkClick = (e,type) =>{
    e.preventDefault();

    const { value } = this.state;

    this.editor.toggleMark(type);
    
  }

  onClickLink=e=>{
    e.preventDefault();
    const editor = this.editor;
    const {value} = editor;
    const hasLinks = this.hasLinks();

    if(hasLinks){
      editor.command(unwrapLink);
    }

    else if( value.selection.isExpanded){
        const href = window.prompt("Enter the URL of the link");
        if(href == null)
          return;
        editor.command(wrapLink,href);
    }

    else{
        const href = window.prompt("Enter the URL of the link");
        if(href == null)
          return;
        const text = window.prompt('Enter the text for the link:')

        if (text == null) {
          return;
        }

        editor
          .insertText(text)
          .moveFocusBackward(text.length)
          .command(wrapLink, href)
      
    }
  }

  onClickUndo= event => {
    event.preventDefault()
    this.editor.undo()
  }

  onClickRedo= event => {
    event.preventDefault()
    this.editor.redo()
  }

  

  onClickImage = (event) => {
    event.preventDefault()
    const src = window.prompt('Enter the URL of the image:')
    if (!src) return
    this.editor.command(insertImage, src)
  }


  submit = e =>{
    e.preventDefault();
    const blogdata_htmlstring = localStorage.getItem('content');

    

    const blogdata_string = Plain.serialize(this.state.value);

    console.log("edit page",this.state.value);
    this.props.submit({
                        blogdata_htmlstring:blogdata_htmlstring,
                        blogdata_string:blogdata_string
                      });


  }

  render() {
    return (
      <Fragment>
        <Editor
          ref={this.ref}
          value={this.state.value}
          onChange={this.onChange} 
          onPaste={this.onPaste}
          onKeyDown={this.onKeyDown}
          renderMark={this.renderMark}
          renderInline={this.renderInline}
          renderBlock={this.renderBlock}
          onDrop={this.onDropOrPaste}
          renderEditor={this.renderEditor}
          />
        <Button variant="outlined" color="primary" onClick={this.submit}>
            Publish
        </Button>
      </Fragment>
      );
  }


  renderEditor = (props, editor, next) => {
    const children = next();
    return (
      <React.Fragment>
        <FormatToolbar>
          <div style={{backgroundColor:'#fdfaf5',display:'flex',
                        alignItems:'center',
                        flexDirection:'row',
                        flexWrap:'wrap'}}>
            <HeaderDropDown header="Heading">
                <BlockButton editor={editor} type="h1" icon={{component:"Heading 1"}} fontsize="2em" />
                
                <BlockButton editor={editor} type="h2" icon={{component:"Heading 2"}} fontsize="1.5em" />
                
                <BlockButton editor={editor} type="h3" icon={{component:"Heading 3"}} fontsize="1.17em" />
                          
                <BlockButton editor={editor} type="h4" icon={{component:"Heading 4"}} fontsize="1em" />
            </HeaderDropDown>

            <ToolbarButton editor={editor} type="bold" icon={{component:FormatBold}} />
            <ToolbarButton editor={editor} type="italic" icon={{component:FormatItalic}} />
            <ToolbarButton editor={editor} type="underline" icon={{component:FormatUnderlined}} />
            <ToolbarButton editor={editor} type="strikethrough" icon={{component:FormatStrikethroughIcon}} />
            <div style={{padding:'0 10px',cursor:'pointer',backgroundColor:`${this.hasLinks()?'#e4e4e4':'white'}`}}
              onMouseDown={this.onClickLink}>
                <LinkIcon/>
            </div>
            <ToolbarButton editor={editor} type="code" icon={{component:CodeIcon}} />
            <BlockButton editor={editor} type="bulleted-list" icon={{component:FormatListBulleted}} />
            <BlockButton editor={editor} type="numbered-list" icon={{component:FormatListNumberedIcon}} />
             <BlockButton editor={editor} type="blockquote" icon={{component:FormatQuoteIcon}} />
            <ToolbarButtonDump handler={this.onClickImage} icon={{component:ImageIcon}}/>
            <ToolbarButtonDump handler={this.onClickUndo} icon={{component:UndoIcon}}/>
             
            <ToolbarButtonDump handler={this.onClickRedo} icon={{component:RedoIcon}}/>
          </div>
        </FormatToolbar>
          {children}
        <HoverMenuStyle ref={this.menuRef} >
           <MarkButton editor={editor} type="bold" icon={{component:FormatBold}} />
           <MarkButton editor={editor} type="italic" icon={{component:FormatItalic}} />
           <MarkButton editor={editor} type="underline" icon={{component:FormatUnderlined}} />
           <MarkButton editor={editor} type="strikethrough" icon={{component:FormatStrikethroughIcon}} />
           <MarkButton editor={editor} type="code" icon={{component:CodeIcon}} />
           <MarkButtonLink editor={editor} handler={this.onClickLink} icon={{component:LinkIcon}}/>
          </HoverMenuStyle>
      </React.Fragment>
    )
  }

} 


export default SlateEditor;