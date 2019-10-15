import { Editor } from 'slate-react'
import { Value } from 'slate'
import React from 'react'
import { isKeyHotkey } from 'is-hotkey'

import FormatBold from "@material-ui/icons/FormatBold";
import FormatItalic from "@material-ui/icons/FormatItalic";
import FormatUnderlined from "@material-ui/icons/FormatUnderlined";
import CodeIcon from "@material-ui/icons/Code";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

import { FormatToolbar,ToolbarButton,ToolbarButtonDump } from './FormatToolbar';
import Html from 'slate-html-serializer'
const initialValue = {
  "object": "value",
  "document": {
    "object": "document",
    "nodes": [
      {
        "object": "block",
        "type": "paragraph",
        "nodes": [
          {
            "object": "text",
            "text": ""
          }
        ]
      }
      
    ]
  }
};

const DEFAULT_NODE = 'paragraph'



const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')


const BLOCK_TAGS = {
  p: 'paragraph',
  list:'list-item',
  ul:'bulleted-list',
  ol:'numbered-list',
  h1:'heading-one',
  h2:'heading-two',
  h3:'h3',
  h4:'h4',
  img:'image', 
  blockquote:'block-quote'
}

const MARK_TAGS = {
  strong: 'bold',
  em: 'italic',
  u: 'underlined',
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

          case 'heading-one':
            return <h1>{children}</h1>
          case 'heading-two':
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

          case 'block-quote':
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
          case 'underlined':
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


class CommentEditor extends React.Component {


  state = {
    value: Value.fromJSON(initialValue),
  }



  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type === type)
  }

 

  hasBlock = type => {
    const { value } = this.state
    return value.blocks.some(node => node.type === type)
  }


  ref = editor => {
    this.editor = editor
  }

 submit=e=>{
  e.preventDefault();
  const html_string = html.serialize(this.state.value);
  this.props.submit(html_string);
 }

  render() {
    return (
      <div>
        <FormatToolbar>
          <div style={{backgroundColor:'#fdfaf5',display:'flex',
                        alignItems:'center',
                        flexDirection:'row',
                        flexWrap:'wrap'}}>
            {this.renderMarkButton('bold', {component:FormatBold})}
            {this.renderMarkButton('italic',{component:FormatItalic})}
            {this.renderMarkButton('underlined',{component:FormatUnderlined})}
            {this.renderMarkButton('code',{component:CodeIcon})}
            {this.renderBlockButton('heading-one',{component:"h1"})}
            {this.renderBlockButton('heading-two',{component:"h2"})}
            {this.renderBlockButton('block-quote',{component:FormatQuoteIcon})}
            {this.renderBlockButton('numbered-list',{component:FormatListNumberedIcon})}
            {this.renderBlockButton('bulleted-list',{component:FormatListBulleted})}
          </div>
        </FormatToolbar>
        <Editor
          spellCheck
          autoFocus
          placeholder="Write your comment ... "
          ref={this.ref}
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderBlock={this.renderBlock}
          renderMark={this.renderMark}
        />
        <button onClick={this.submit} >submit</button>
      </div>
    )
  }


  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)

    return (
      <div
        onMouseDown={event => this.onClickMark(event, type)}
        style={{
              padding:'0 10px',
              cursor:'pointer',
              backgroundColor:`${isActive?'#e4e4e4':'#fdfaf5'}`
            }}
      >
        {typeof icon.component === "string" ? (
                          <span>{icon.component}</span>
                        ) : (
                          <icon.component />
        )}
      </div>
    )
  }



  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type)

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value: { document, blocks } } = this.state

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key)
        isActive = this.hasBlock('list-item') && parent && parent.type === type
      }
    }

    return (
      <div
        onMouseDown={event => this.onClickBlock(event, type)}
        style={{
              padding:'0 10px',
              cursor:'pointer',
              backgroundColor:`${isActive?'#e4e4e4':'#fdfaf5'}`
            }}
      >
        {typeof icon.component === "string" ? (
                          <span>{icon.component}</span>
                        ) : (
                          <icon.component />
        )}
      </div>
    )
  }



  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
      default:
        return next()
    }
  }



  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
      default:
        return next()
    }
  }

 

  onChange = ({ value }) => {
    this.setState({ value })
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

 

  onClickMark = (event, type) => {
    event.preventDefault()
    this.editor.toggleMark(type)
  }

  onClickBlock = (event, type) => {
    event.preventDefault()

    const { editor } = this
    const { value } = editor
    const { document } = value

    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type)
      })

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        editor
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        editor.setBlocks('list-item').wrapBlock(type)
      }
    }
  }
}

export default CommentEditor