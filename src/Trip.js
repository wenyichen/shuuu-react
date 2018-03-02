export default class BlocksLoop extends Component {
    constructor () {
      super()
      this.getTripComponent = this.getTripComponent.bind(this)
    }
  
    getTripComponent (trip) {
      switch (block.type) {
        case 'heading':
          return <HeadingBlock key={block.id} {...block} />
  
        case 'text':
          return <TextBlock key={block.id} {...block} />
  
        case 'image':
          return <ImageBlock key={block.id} {...block} />
  
        case 'list':
          return <ListBlock key={block.id} {...block} />
  
        default:
          return <div className='no_block_type' />
      }
    }
  
    render () {
      return (
        <div className='trips'>
          { this.props.trips.map(trip => this.getTripComponent(trip)) }
        </div>
      )
    }
  }
  