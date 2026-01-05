import { useEffect } from "react"
import { Row, Col, Card } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { fetchPosts } from "../store/postSlice"

export const Feed = () => {

    const token = useSelector((store) => store.user.token)
    const posts = useSelector((store) => store.post.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/signin')
        } else {
            dispatch(fetchPosts())
        }
    }, [token, dispatch, navigate])

    return (
        <Row>
            {posts?.map(post => (
                <Col lg={4} md={6} xs={12} className="mt-2" key={post._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={post.imageUrl} />
                        <Card.Body>
                            <Card.Text>{post.caption}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
